import { investmentReturns } from "@/constants/accountInfo";
import { useEffect, useState } from "react";
import { useRouter } from 'expo-router';
import { Dimensions, ScrollView, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";

export default function Graph() {
  const router = useRouter();

  // Prepare data
  const labels = investmentReturns.map(entry => entry.date.slice(2, 7)); // e.g. '24-07'
  const balances = investmentReturns.map(entry => entry.balance);

  // Calculate return stats
  const initialInvestment = investmentReturns.reduce((sum, e) => sum + e.invested, 0);
  const totalReturn = balances[balances.length - 1] - initialInvestment;
  const percentageReturn = ((totalReturn / initialInvestment) * 100).toFixed(1);

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 3, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  const [tooltip, setTooltip] = useState({
    visible: false,
    x: 0,
    y: 0,
    value: 0 as number,
  });

  const [view, setView] = useState<'week' | 'month' | '1Y'>('1Y');

  // Filter data based on view
  let filteredLabels = labels;
  let filteredBalances = balances;
  if (view === 'week') {
    filteredLabels = labels.slice(-7);
    filteredBalances = balances.slice(-7);
  } else if (view === 'month') {
    filteredLabels = labels.slice(-30);
    filteredBalances = balances.slice(-30);
  } else if (view === '1Y') {
    filteredLabels = labels.slice(-60);
    filteredBalances = balances.slice(-30);
  }

    // Hide tooltip after 2 seconds
  useEffect(() => {
    if (tooltip.visible) {
      const timeout = setTimeout(() => setTooltip(t => ({ ...t, visible: false })), 2000);
      return () => clearTimeout(timeout);
    }
  }, [tooltip.visible]);

  return (

    <View className="w-full flex justify-center items-center">
      <LineChart
        data={{
          labels: filteredLabels,
          datasets: [
            {
              data: filteredBalances,
              strokeWidth: 4,
            },
          ],
        }}
        width={Dimensions.get("window").width * 0.9}
        height={260}
        yAxisLabel="$"
        chartConfig={chartConfig}
        bezier
        style={{ marginVertical: 8, borderRadius: 16, paddingRight: 20, paddingLeft: 20}}
        withHorizontalLabels={false}
        withVerticalLabels={false}
        withDots={true}
        withInnerLines={false}
        withOuterLines={false}
        onDataPointClick={({ value, x, y }) => {
          setTooltip({
            visible: true,
            x,
            y,
            value: value as number,
          });
        }}
      />
      {tooltip.visible && (
        <View
          style={{
            position: 'absolute',
            left: tooltip.x - 30, // center the tooltip
            top: tooltip.y - 40, // above the point
            backgroundColor: 'rgba(0,0,0,0.8)',
            paddingHorizontal: 8,
            paddingVertical: 4,
            borderRadius: 6,
            zIndex: 10,
          }}
        >
          <Text style={{ color: 'white', fontSize: 14 }}>
            ${tooltip.value}
          </Text>
        </View>
      )}
    </View>

  )
}
