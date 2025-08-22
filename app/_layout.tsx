import { Stack } from 'expo-router';
import '../global.css';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* This item renders the tab navigator (its own layout lives inside the group) */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      {/* Non-tab screens (push onto stack above tabs) */}
      <Stack.Screen name="info" />
      <Stack.Screen name="claim" />
      <Stack.Screen name="savings" />
      <Stack.Screen name="investments" />
    </Stack>
  );
}
