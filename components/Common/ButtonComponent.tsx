import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function ButtonComponent({ title, onPress }: { title: string; onPress: () => void }){
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#002800",
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
})