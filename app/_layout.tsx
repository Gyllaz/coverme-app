import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import '../global.css';
import { WalletProvider } from "@/context/WalletContext";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [fontsLoaded] = useFonts({
    BASKiT: require("@/assets/fonts/baskit-regular.otf"),
    "BASKiT-Bold": require("@/assets/fonts/baskit-bold.otf"),
    "BASKiT-Light": require("@/assets/fonts/baskit-light.otf"),
    "BASKiT-Medium": require("@/assets/fonts/baskit-medium.otf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <WalletProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="welcome" options={{ headerShown: false }} />
          {/* This item renders the tab navigator (its own layout lives inside the group) */}
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        </Stack>

      </WalletProvider>

    </GestureHandlerRootView>
  );
}
