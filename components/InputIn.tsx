import { formatNumber } from "@/hooks/formatNumber";
import { StyleSheet, Text, View } from "react-native";

export default function InputIn({ number, currency }: { number: string; currency: string }) {
  return (
    <View>
      <Text style={{ fontSize: number?.length > 16 ? 42 : 64, ...styles.text }}>${formatNumber(number)} {currency}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    borderWidth: 0,
    borderColor: "transparent",
    width: "100%",
    padding: 10,
    fontWeight: "bold",
    color: "#fff",
  }
})