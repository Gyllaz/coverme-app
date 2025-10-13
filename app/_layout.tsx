import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import '../global.css';
import { WalletProvider } from "@/context/WalletContext";

export default function RootLayout() {
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
