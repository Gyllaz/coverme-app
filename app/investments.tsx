import { Text, View, ScrollView, Dimensions } from "react-native";
import { useState, useEffect } from "react";
import { BackArrow } from '../components';
import { investmentReturns } from "@/constants/accountInfo";
import { LineChart } from "react-native-chart-kit";

export default function Investments() {
  // Prepare data
  const labels = investmentReturns.map(entry => entry.date.slice(2, 7)); // e.g. '24-07'
  const balances = investmentReturns.map(entry => entry.balance);

  // Calculate return stats
  const initialInvestment = investmentReturns.reduce((sum, e) => sum + e.invested, 0);
  const totalReturn = balances[balances.length - 1] - initialInvestment;
  const percentageReturn = ((totalReturn / initialInvestment) * 100).toFixed(1);

  return (
    <View className="bg-white h-full flex gap-[0.1rem]">
      <BackArrow />

      <View className="flex flex-row pt-[2.5rem] pb-[1rem] gap-[1.5rem] w-full pl-[2rem]">
        <Text className="text-[#5050c2] font-poppins text-[2.5rem] font-medium">Growth</Text>
      </View>

      <ScrollView>
        <View className="flex gap-[2rem] pt-[1.5rem] pb-[4rem]">
          {/* Stats Box */}
          <View className="w-full flex justify-center items-center">
            <View className="bg-[#5050C2] w-[90%] border-[3px] border-[#5050c2] flex gap-[1rem] py-[2rem] px-[2rem] rounded-[15px]">
              <Text className="font-poppins text-[1.7rem] tracking-[0.1rem] text-white font-medium">
                Investment Returns
              </Text>

              <View className="flex gap-[1rem]">
                <View className="w-full flex flex-row justify-between">
                  <Text className="font-poppins text-[1.3rem] text-white font-light">Total Return</Text>
                  <Text className="font-poppins text-[1.3rem] text-white">{percentageReturn}%</Text>
                </View>
                <View className="w-full flex flex-row justify-between">
                  <Text className="font-poppins text-[1.3rem] text-white font-light">Increased Savings</Text>
                  <Text className="font-poppins text-[1.3rem] text-white">${totalReturn.toFixed(2)}</Text>
                </View>
                <View className="pt-[1rem]">
                  <Text className="font-poppins text-[1.3rem] text-white">
                    By investing your savings in our growth fund, we’re able to maximise your cover
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* Graph Box */}
          <View className="w-full flex justify-center items-center">
            <View className="bg-[#5050c2] w-[90%] border-[3px] border-[#5050c2] flex gap-[1rem] py-[2rem] px-[2rem] rounded-[15px]">
              <Text className="font-poppins text-[1.7rem] tracking-[0.1rem] text-white font-medium">
                Graph
              </Text>
              <Text className="font-poppins text-[1.3rem] text-white font-light">
                Here's the growth of your health fund over the time you've been with us
              </Text>

              <LineChart
                data={{
                  labels,
                  datasets: [
                    {
                      data: balances,
                      strokeWidth: 2,
                    },
                  ],
                }}
                width={Dimensions.get("window").width * 0.82}
                height={240}
                yAxisLabel="$"
                chartConfig={{
                  backgroundColor: "#5050c2",
                  backgroundGradientFrom: "#5050c2",
                  backgroundGradientTo: "#5050c2",
                  decimalPlaces: 0,
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: () => "white",
                  propsForDots: {
                    r: "4",
                    strokeWidth: "2",
                    stroke: "#ffffff",
                  },
                }}
                bezier
                style={{ marginVertical: 8, borderRadius: 16 }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
