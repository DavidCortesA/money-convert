import Header from "@/components/Header";
import InputOut from "@/components/InputOut";
import Keyboard from "@/components/Keyboard";
import { useChangeMoney } from "@/hooks/useChangeMoney";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {
  const { changeMoney, loading } = useChangeMoney();
  const [number, setNumber] = useState<string>();
  const [change, setChange] = useState<boolean>(true);
  const [numberChanged, setNumberChanged] = useState<number | string>();
  const [currency, setCurrency] = useState<string>();
  const [newCurrency, setNewCurrency] = useState<string>();
  const insets = useSafeAreaInsets();

  const onChangeNumber = (item: string) => {
    setNumber((prev) => {
      if (item === "DEL") {
        return prev?.slice(0, -1);
      }
      return prev ? prev + item : item;
    });
  };

  const handleChange = () => {
    setChange(!change);
  }

  const handleChangeMoney = () => {
    const newValue = changeMoney(
      parseFloat(number as string),
      currency as string,
      newCurrency as string
    );
    setNumberChanged(newValue.toString());
    handleChange();
  }

  useEffect(() => {
    if (numberChanged) {
      const newValue = changeMoney(
        parseFloat(number as string),
        currency as string,
        newCurrency as string
      );
      setNumberChanged(newValue.toString());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberChanged, currency, newCurrency, number]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#002800" />
      </View>
    )
  }

  return (
    <View
      style={{
        flex: 1,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Header
        number={number as string}
        setCurrency={setCurrency}
        setNewCurrency={setNewCurrency}
        currency={currency as string}
        newCurrency={newCurrency as string}
      />
      {change && <Keyboard onChangeNumber={onChangeNumber} onChangeMoney={handleChangeMoney}/>}
      {!change && numberChanged && <InputOut number={numberChanged as string} onChange={handleChange} newCurrency={newCurrency as string} />}
    </View>
  );
}
