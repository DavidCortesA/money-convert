import { useState } from "react";

export function useMoneyInput() {
  const [value, setValue] = useState<string>("0.00");

  const handleInput = (digit: string) => {
    // Quita todo lo que no sea número
    const cleaned = value.replace(/\D/g, "");

    // Si presionas "DEL", elimina el último dígito
    if (digit === "DEL") {
      const newValue = cleaned.slice(0, -1);
      return formatDisplay(newValue);
    }

    // Agrega el nuevo dígito al final
    const newValue = cleaned + digit;
    formatDisplay(newValue);
  };

  const formatDisplay = (digits: string) => {
    // Aseguramos al menos 3 dígitos para manejar decimales
    const padded = digits.padStart(3, "0");
    const integerPart = padded.slice(0, -2);
    const decimalPart = padded.slice(-2);
    const number = `${parseInt(integerPart, 10)}.${decimalPart}`;

    // Da formato con comas de miles
    const formatted = Number(number).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    setValue(formatted);
  };

  const reset = () => setValue("0.00");

  return { value, handleInput, reset };
}
