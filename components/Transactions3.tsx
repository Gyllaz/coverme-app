import { investmentReturns } from "@/constants/accountInfo";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Alert, Share, Text, TouchableOpacity, useWindowDimensions, View, ScrollView } from "react-native";
import { LineGraph, type GraphPoint } from "react-native-graph";
import WideSVG from "./SVG/WideSVG";
import { Platform } from "react-native";


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
      <ScrollView>
        <View className="w-full px-[2rem] pb-[7rem] flex flex-col gap-[1rem]">
          {/* Header */}
          <View
            pointerEvents="box-none"
            className="pt-[4rem] pb-[1rem]"
            >
            <Text className="font-[BASKiT-Medium] text-[#231F20] pt-[1rem]  text-[1.7rem]">
              Growth
            </Text>
          </View>

          <View className="" style={{ overflow: "visible" }}>
            <View className="flex flex-col items-center px-[2rem]" style={{ overflow: "visible" }}>
              <View style={{ width: width - 40, height: 320, overflow: "visible" }} className="flex">
                {/* Ticker */}
                <View className="pl-[1rem]">
                  <Text className="text-[2rem] font-[BASKiT]">
                    {fmtCurrency(hoverValue)}{"  "}
                  </Text>
                    <Text style={{ color: pctChangeFromStart >= 0 ? "#105E49" : "#8AC3F9" }} className="text-[1.5rem] font-[BASKiT]">
                      {fmtPct(pctChangeFromStart)}
                    </Text>
                </View>

                {/* Graph */}
                <View className="w-full h-[15rem]" style={{ overflow: "visible" }}>
                  <LineGraph
                    points={filteredData}
                    animated
                    color="#8AC3F9"
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
                          borderWidth: 1,
                          borderColor: active ? "#ECF86E" : "#F3F3F1",
                          backgroundColor: active ? "#ECF86E" : "#F3F3F1",
                        }}
                      >
                        <Text style={{ color: "#000000", fontWeight: "600", fontSize: 15, }}
                          className="font-[BASKiT-Light]"
                        >
                          {key}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            </View>
            <View className="gap-[24px] pt-[16px]">
              <View
                className="w-full rounded-[16px] bg-white py-[1.5rem] border-b-[1px] border-b-[#F3F3F1]"
              >
                <View className="flex-row justify-between border-b-[1px] border-b-[#F3F3F1] pb-[1rem]">
                  <Text className="text-[1.3rem] text-[#231F20] font-[BASKiT]">
                    Investment Returns
                  </Text>
                </View>

                <View className="mt-[12px] gap-[10px]">
                  <View className="flex-row justify-between">
                    <Text className="text-[1.1rem] text-[#231F20] font-[BASKiT]">
                      Total Return
                    </Text>
                    <Text className="text-[1.1rem] text-[#231F20] font-[BASKiT]">
                      {fmtPct(lastPercentage)}
                    </Text>
                  </View>
                  <View className="flex-row justify-between">
                    <Text className="text-[1.1rem] text-[#231F20] font-[BASKiT]">
                      Increased Savings
                    </Text>
                    <Text className="text-[1.1rem] text-[#231F20] font-[BASKiT]">
                      {fmtCurrency(lastValue)}
                    </Text>
                  </View>
                  <View className="pt-[0.5rem] flex-row justify-between">
                    <Text className="text-[1.1rem] font-[BASKiT-Light]">
                      By investing your savings in our growth fund, we’re able to maximise your cover
                    </Text>
                  </View>
                </View>
              </View>

              <TouchableOpacity
                className="w-full rounded-[1rem] bg-[#ECF86E] py-[0.5rem] px-[1.3rem]"
                onPress={() => handleShare()}
              >
                <View className={`flex-row align-center ${Platform.OS === 'ios' ? 'pt-[0.5rem]' : ''}`}>
                  <Text className="font-[BASKiT-Medium] text-[1.3rem] pt-[0.6rem] text-[#231F20]">
                    Share your growth with others!
                    </Text>
                  <View className="h-[3rem] w-[3rem] ml-[3rem] pt-[0.1rem] flex">
                    <WideSVG />
                  </View>
                </View>
              </TouchableOpacity>
            </View>

          </View>

        </View>

      </ScrollView>
    </View>
  );
}
