import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Animated, { FadeIn, FadeOut, Easing } from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { LogoSVG } from "@/components";

export default function brighterDays() {

  const router = useRouter();
  const [visible, setVisible] = useState(true);


  const handlePress = () => {

    setVisible(false);
    router.replace("/(tabs)/home");
  };

  return (
    <View className="h-full w-full">
      {visible && (
        <Animated.View
          entering={FadeIn.duration(600).easing(Easing.out(Easing.cubic))}
          className="h-full w-full"
        >
          <LinearGradient
            colors={["#8AC3F9", "#E5EF68"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <View className="flex flex-col justify-center align-center">
              <View className="w-full flex flex-row justify-center align-center">
                <LogoSVG />
              </View>
              <View className="mt-[-20%]">

                <Image source={require("@/assets/images/brighterDays.png")}
                  style={{
                    width: 400,
                    height: 500,
                    resizeMode: 'stretch',
                  }}
                />
              </View>
              <View className="mt-[-10%]">
                <View className=" pb-[10%] flex flex-col justify-center align-center">
                  <Text className="text-[3.5rem] text-[#1E1E1E] font-[BASKiT-medium] text-center">Brighter days{'\n'}ahead</Text>
                  <Text className="pt-[5%] text-[1.5rem] font-[BASKiT] text-[#1E1E1E] text-center">You can now use your{'\n'} CoverMe card for all health {'\n'} related expenses</Text>
                  <View className="w-full flex flex-row justify-center align-center">
                    <TouchableOpacity
                      onPress={handlePress}
                      activeOpacity={0.9}
                      className="w-[10rem] bg-white rounded-full flex flex-row justify-center align-center py-[1rem] px-[2rem] mt-[2rem]"
                    >
                      <Text className="text-[1.5rem] font-[BASKiT] text-[#1E1E1E]">
                      Dismiss
                      </Text>
                    </TouchableOpacity>

                  </View>
                </View>

              </View>
            </View>
          </LinearGradient>
        </Animated.View>
      )}
    </View>
  );
}
