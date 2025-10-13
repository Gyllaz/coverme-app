import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Animated, { FadeIn, FadeOut, Easing } from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

export default function Sent() {
  const router = useRouter();
  const [visible, setVisible] = useState(true);

  const handlePress = () => {
    // Start fade-out animation
    setVisible(false);
    router.push("/(tabs)/home");
; 
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
            <View className="flex flex-col justify-center align-center z-20">
              <Image source={require("@/assets/images/paperPlane.png")}
                style={{
                  width: 300,
                  height: 300,
                  resizeMode: 'stretch',

                }}
              />
              <View className="pt-[5%] pb-[10%] flex flex-col justify-center align-center">
                <Text className="text-[3.5rem] text-[#1E1E1E] font-medium text-center">We’ve Sent{'\n'}Your Card</Text>
                <Text className="pt-[5%] text-[1.5rem] text-[#1E1E1E] text-center">Check your messages!{'\n'} We’ve sent you a link that will load {'\n'} your card to your apple wallet.</Text>
              </View>
            </View>
            <View className="z-0">
              <View className="absolute left-[-100] inset-y-[-450]">
                <Image source={require("@/assets/images/cloud2.png")}
                    style={{
                    width: 500,
                    height: 300,
                    resizeMode: 'stretch',
                  }}
                />

              </View>
              <View className="absolute right-[-50] inset-y-[-700]">
                <Image source={require("@/assets/images/cloud3.png")}
                    style={{
                    width: 700,
                    height: 300,
                    resizeMode: 'stretch',
                  }}
                />

              </View>
            </View>
            <TouchableOpacity
              onPress={handlePress}
              activeOpacity={0.9}
              className="w-[30%] h-[4rem] bg-white rounded-full flex flex-row justify-center align-center pt-[1rem]"
            >
              <Text className="text-[1.5rem] text-[#1E1E1E]">
                Got It
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </Animated.View>
      )}
    </View>
  );
}
