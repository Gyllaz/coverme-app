import { Stack } from "expo-router";
import "../global.css"

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="info" options={{ title: 'Info' }} />
      <Stack.Screen name="claim" options={{title: "Claim"}} />
      <Stack.Screen name="policy" options={{title: "Policy"}} />
      <Stack.Screen name="transactions" options={{title: "Transactions"}} />
      <Stack.Screen name="savings" options={{title: "Savings"}} />
      <Stack.Screen name="investments" options={{title: "Investments"}} />
    </Stack>
  );
}
