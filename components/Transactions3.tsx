import { View, Text, Dimensions, TouchableOpacity, Share, Alert, useWindowDimensions } from "react-native";
import { BlurView } from "expo-blur";
import { LineGraph, type GraphPoint } from "react-native-graph";
import { investmentReturns } from "@/constants/accountInfo";
import { useMemo, useState, useCallback, useEffect } from "react";
import ShareSVG from "./ShareSVG";


type RangeKey = "3M" | "6M" | "1Y" | "ALL";

// helpers
const fmtCurrency = (n: number) => `$${Math.round(n).toLocaleString()}`;
const fmtPct = (n: number) => `${n >= 0 ? "+" : ""}${n.toFixed(1)}%`;
const subMonths = (d: Date, months: number) => {
  const copy = new Date(d);
  copy.setMonth(copy.getMonth() - months);
  return copy;
};

export default function Transactions3() {
  const { width } = useWindowDimensions();
  // 1) Clean → sort → de-dupe (full dataset)
  const fullData = useMemo<GraphPoint[]>(() => {
    const pts = investmentReturns
      .map((e) => ({ date: new Date(e.date), value: Number(e.balance) }))
      .filter((p) => !Number.isNaN(p.date.getTime()) && Number.isFinite(p.value))
      .sort((a, b) => a.date.getTime() - b.date.getTime());

    const out: GraphPoint[] = [];
    for (let i = 0; i < pts.length; i++) {
      if (i === 0 || pts[i].date.getTime() !== pts[i - 1].date.getTime()) out.push(pts[i]);
    }
    return out;
  }, []);


  // 2) Range state
  const [range, setRange] = useState<RangeKey>("ALL");

  // 3) Filtered data by range
  const filteredData = useMemo<GraphPoint[]>(() => {
    if (fullData.length === 0) return [];
    if (range === "ALL") return fullData;

    const latest = fullData.at(-1)!.date;
    const cutoff =
      range === "3M" ? subMonths(latest, 3)
      : range === "6M" ? subMonths(latest, 6)
      : subMonths(latest, 12); // "1Y"

    // keep points on/after cutoff
    return fullData.filter((p) => p.date >= cutoff);
  }, [fullData, range]);

  // 4) Ticker state → defaults to latest in *filtered* range
  const startValue = filteredData[0]?.value ?? 0;
  const latestValue = filteredData.at(-1)?.value ?? startValue;

  const lastValue = investmentReturns.at(-1)?.balance ?? 0;
  const lastPercentage = (lastValue/startValue)*100;

  const [hoverValue, setHoverValue] = useState<number>(latestValue);

  // keep hover in sync when range changes
  useEffect(() => {
    setHoverValue(latestValue);
  }, [latestValue, range]);

  const pctChangeFromStart = startValue
    ? ((hoverValue - startValue) / startValue) * 100
    : 0;

  // 5) Handlers from react-native-graph
  const handlePointSelected = useCallback((p: GraphPoint | null) => {
    if (!p) return;
    setHoverValue(p.value);
  }, []);

  const handleGestureEnd = useCallback(() => {
    setHoverValue(latestValue);
  }, [latestValue]);

  const handleShare = async () => {
  
    try {
      const message = `My CoverMe health wallet grew by ${fmtPct(lastPercentage)} to ${fmtCurrency(lastValue)}!`;
        await Share.share({
          message,
        });
      } catch (error: any) {
        Alert.alert('Error', 'Failed to share account growth.');
      }
  };

  return (
    <View className="bg-white h-full">
      {/* Header */}
      <View
        style={{ position: "absolute", top: 0, left: 0, right: 0, height: 96, zIndex: 10, elevation: 10 }}
        pointerEvents="box-none"
        className="h-[10rem]"
      >
        <BlurView
          intensity={30}
          tint="light"
          style={{
            backgroundColor: "rgba(255,255,255,0.15)",
            borderBottomWidth: 1,
            borderColor: "rgba(255,255,255,0.35)",
          }}
          className="pt-[3rem] pb-[1rem]"
        >
          <Text className="text-[#5050c2] pb-[3rem] pt-[1.5rem] pl-[2rem] text-[2.5rem]">
            Growth
          </Text>
        </BlurView>
      </View>

      <View className="pt-[10rem]" style={{ overflow: "visible" }}>
        <View className="flex flex-col items-center px-[2rem]" style={{ overflow: "visible" }}>
          <View style={{ width: width - 40, height: 320, overflow: "visible" }} className="flex">
            {/* Ticker */}
            <View className="pl-[1rem]">
              <Text className="text-[1.8rem] font-medium">
                {fmtCurrency(hoverValue)}{"  "}
              </Text>
                <Text style={{ color: pctChangeFromStart >= 0 ? "#55C47C" : "#E24C4B" }} className="text-[1.2rem]">
                  {fmtPct(pctChangeFromStart)}
                </Text>
            </View>

            {/* Graph */}
            <View className="w-full h-[15rem]" style={{ overflow: "visible" }}>
              <LineGraph
                points={filteredData}
                animated
                color="#5050C2"
                enablePanGesture
                verticalPadding={30}
                horizontalPadding={30}
                onPointSelected={handlePointSelected}
                onGestureEnd={handleGestureEnd}
                selectionDotShadowColor="rgba(0,0,0,0.2)"
                style={{
                  flex: 1,
                  marginHorizontal: 10,
                  marginVertical: 10,
                  overflow: "visible",
                  height: 150,
                }}
              />
            </View>

            {/* Range pills */}
            <View className="mt-[10px] w-full flex flex-row justify-center gap-[1.3rem]">
              {(["3M", "6M", "1Y", "ALL"] as RangeKey[]).map((key) => {
                const active = range === key;
                return (
                  <TouchableOpacity
                    key={key}
                    onPress={() => setRange(key)}
                    activeOpacity={0.8}
                    style={{
                      paddingHorizontal: 14,
                      paddingVertical: 6,
                      borderRadius: 999,
                      borderWidth: active ? 1 : 0,
                      borderColor: active ? "#5050C2" : "",
                      backgroundColor: active ? "#5050C2" : "",
                    }}
                  >
                    <Text style={{ color: active ? "#FFFFFF" : "#5050C2", fontWeight: "600", fontSize: 17, }}>
                      {key}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
        <View className="gap-[24px] px-[16px] pt-[16px]">
          <View
            className="w-full rounded-[16px] bg-white px-[2rem] py-[1.5rem]"
            style={{
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: 0.38,
              shadowRadius: 10,
              elevation: 10,
            }}
          >
            <View className="flex-row justify-between">
              <Text className="font-poppins text-[1.5rem] text-[#5050C2] font-medium">
                Investment Returns
              </Text>
            </View>

            <View className="mt-[12px] gap-[10px]">
              <View className="flex-row justify-between">
                <Text className="font-poppins text-[1.3rem] text-[#5050C2] font-light">
                  Total Return
                </Text>
                <Text className="font-poppins text-[1.3rem] text-[#5050C2]">
                  {fmtPct(lastPercentage)}
                </Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="font-poppins text-[1.3rem] text-[#5050C2] font-light">
                  Increased Savings
                </Text>
                <Text className="font-poppins text-[1.3rem] text-[#5050C2]">
                  {fmtCurrency(lastValue)}
                </Text>
              </View>
              <View className="pt-[0.5rem] flex-row justify-between">
                <Text className="text-[1.2rem]">
                  By investing your savings in our growth fund, we’re able to maximise your cover
                </Text>
              </View>
            </View>
          </View>

          <View
            className="w-full rounded-[16px] bg-white px-[2rem] py-[1rem]"
            style={{
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: 0.38,
              shadowRadius: 13,
              elevation: 10,
            }}
          >
            <View className="flex-row align-center">
              <Text className="font-poppins text-[1.4rem] pt-[0.5rem] text-[#5050C2] font-medium">
                Share your growth with others!
                </Text>
              <View className="h-[3rem] w-[3rem] ml-[3rem] pt-[0.1rem] flex">
                <ShareSVG onPress={handleShare}/>
              </View>
            </View>
          </View>
        </View>

      </View>
    </View>
  );
}
