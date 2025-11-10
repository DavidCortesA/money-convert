import { CurrencyProvider } from "@/context/CurrencyContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <CurrencyProvider>
      <Stack initialRouteName="index" screenOptions={{ headerShown: false }}/>;
    </CurrencyProvider>
  )
}
