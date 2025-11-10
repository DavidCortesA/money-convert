import SelectDropdown from 'react-native-select-dropdown'
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import InputIn from "./InputIn";
import { VALUES } from '@/constants/values';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useChangeMoney } from '@/hooks/useChangeMoney';
import { formatNumber } from '@/hooks/useFormatNumber';
import { formatDate } from '@/hooks/useFormatDate';

export default function Header({
  number,
  currency,
  newCurrency,
  setCurrency,
  setNewCurrency,
}: {
  number: string;
  currency: string;
  newCurrency: string;
  setCurrency: (currency: string) => void;
  setNewCurrency: (newCurrency: string) => void;
}) {
  const listOfMoney = useMemo(() => [
    { change: "mxn", value: VALUES.MXN },
    { change: "usd", value: VALUES.USD },
    { change: "eur", value: VALUES.EUR },
    { change: "gbp", value: VALUES.GBP },
  ], []);
  const { changeMoney, updated } = useChangeMoney();
  const [currentChange, setCuerrentChange] = useState<any>();
  
  // Referencias a los dropdowns para poder controlarlos
  const fromDropdownRef = useRef<any>(null);
  const toDropdownRef = useRef<any>(null);
  
  // 🔹 Al montar, establecer MXN y USD por defecto
  useEffect(() => {
    if (!currency) setCurrency(VALUES.MXN);
    if (!newCurrency) setNewCurrency(VALUES.USD);
  }, [currency, newCurrency, setCurrency, setNewCurrency]);
  
  // 🔹 Cada vez que cambian currency o newCurrency, actualizamos los dropdowns
  useEffect(() => {
    const fromIndex = listOfMoney.findIndex((item) => item.value === currency);
    const toIndex = listOfMoney.findIndex((item) => item.value === newCurrency);
    
    if (fromDropdownRef.current && fromIndex !== -1) {
      fromDropdownRef.current.selectIndex(fromIndex);
    }
    if (toDropdownRef.current && toIndex !== -1) {
      toDropdownRef.current.selectIndex(toIndex);
    }
  }, [currency, newCurrency, listOfMoney]);

  useEffect(() => {
    const newValue = changeMoney(
      1,
      currency as string,
      newCurrency as string
    );
    setCuerrentChange(newValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency, newCurrency]);
  
  return (
    <View style={styles.container}>
      <View style={styles.contain}>
        <Text style={{ color: "#fff", fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>
          Selecciona las divisas
        </Text>

        <View style={styles.selectors}>
          {/* Divisa origen */}
          <SelectDropdown
            ref={fromDropdownRef}
            data={listOfMoney}
            defaultValueByIndex={0} // MXN
            onSelect={(item) => {
              setCurrency(item.value);
            }}
            renderButton={(selected) => (
              <View style={styles.dropdownButtonStyle}>
                <Text style={styles.dropdownButtonTxtStyle}>
                  {selected?.value || VALUES.MXN}
                </Text>
              </View>
            )}
            renderItem={(item, index, isSelected) => (
              <View
                style={{
                  ...styles.dropdownItemStyle,
                  ...(isSelected && { backgroundColor: "#D2D9DF" }),
                }}
              >
                <Text style={styles.dropdownItemTxtStyle}>{item?.value}</Text>
              </View>
            )}
          />

          {/* Botón de cambiar */}
          <TouchableOpacity
            onPress={() => {
              const temp = currency;
              setCurrency(newCurrency);
              setNewCurrency(temp);
            }}
            style={styles.shuffleButton}
          >
            <Ionicons name="shuffle-sharp" size={22} color="#002800" />
          </TouchableOpacity>

          {/* Divisa destino */}
          <SelectDropdown
            ref={toDropdownRef}
            data={listOfMoney}
            defaultValueByIndex={1} // USD
            onSelect={(item) => {
              setNewCurrency(item.value);
            }}
            renderButton={(selected) => (
              <View style={styles.dropdownButtonStyle}>
                <Text style={styles.dropdownButtonTxtStyle}>
                  {selected?.value || VALUES.USD}
                </Text>
              </View>
            )}
            renderItem={(item, index, isSelected) => (
              <View
                style={{
                  ...styles.dropdownItemStyle,
                  ...(isSelected && { backgroundColor: "#D2D9DF" }),
                }}
              >
                <Text style={styles.dropdownItemTxtStyle}>{item?.value}</Text>
              </View>
            )}
          />
        </View>

        <InputIn number={number} currency={currency as string} />
        <Text style={{ color: "#999", fontSize: 14, textAlign: "center" }}>Cambio Actual: $1.00 {currency} = ${formatNumber(currentChange)} {newCurrency}</Text>
        <Text style={{ color: "#999", fontSize: 14, textTransform: "capitalize", textAlign: "center" }}>Actualizado: {updated[currency] ? formatDate(updated[currency]) : "N/A"}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#002800",
  },
  contain: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: "50%",
  },
  shuffleButton: {
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 50,
    marginBottom: 10,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#eee",
    borderWidth: 1,
  },
  selectors: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  dropdownButtonStyle: {
    width: "40%",
    height: 50,
    backgroundColor: "#E9ECEF",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
    textAlign: "center",
  },
  dropdownItemStyle: {
    borderRadius: 12,
    width: "100%",
    height: 50,
    backgroundColor: "#E9ECEF",
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  dropdownItemTxtStyle: {
    borderRadius: 12,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
  },
});
