import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ButtonComponent from "./Common/ButtonComponent";

export default function Keyboard({ onChangeNumber, onChangeMoney }: { onChangeNumber: (number: string) => void, onChangeMoney: () => void}) {
  return (
    <View style={styles.container}>
      <View style={styles.kayboard}>
        {["7", "8", "9", "4", "5", "6", "1", "2", "3", ".", "0", "DEL"].map((item) => (
          <TouchableOpacity key={item} onPress={() => onChangeNumber(item)} style={styles.button}>
            <FlatList
              key={item}
              data={item}
              renderItem={({ item }) => <Text style={styles.buttonText}>{item}</Text>}
              keyExtractor={(item) => item}
              numColumns={3}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ padding: 10 }}
            />
          </TouchableOpacity>
        ))}
      </View>
      <ButtonComponent title="Convertir" onPress={onChangeMoney} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 8
  },
  kayboard: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "#eee",
  },
  button: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 16,
    width: "33.33%",
    height: "25%",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#eee",
    borderWidth: 1,
  },
  buttonText: {
    color: "#002800",
    fontSize: 24,
    fontWeight: "bold",
  },
})