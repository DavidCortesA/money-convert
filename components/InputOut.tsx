import { formatNumber } from "@/hooks/useFormatNumber";
import { StyleSheet, Text, View } from "react-native";
import ButtonComponent from "./Common/ButtonComponent";

export default function InputOut({ number, onChange, newCurrency }: { number: string, onChange: () => void, newCurrency: string}) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: number?.length > 16 ? 42 : 64, ...styles.textNumber }}>${formatNumber(number)} {newCurrency}</Text>
      <View>
        <ButtonComponent title="Volver" onPress={onChange} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#eee",
    width: "100%",
    padding: 10,
    height: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 10,
  },
  textNumber: {
    color: "#002800",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,

  },
})