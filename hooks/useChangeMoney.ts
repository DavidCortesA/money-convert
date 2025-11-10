import { useCurrency } from "@/context/CurrencyContext";

export const useChangeMoney = () => {
  const { rates, loading, updated } = useCurrency();

  const changeMoney = (value: number, from: string, to: string) => {
    if (loading || !rates) return value;
    if (from === to) return value;

    const fromRate = rates[from]?.[to];
    if (fromRate) return value * fromRate;

    // Si no hay conversión directa, intentar convertir vía USD
    const viaUSD = rates[from]?.USD && rates.USD?.[to];
    if (viaUSD) return value * rates[from].USD * rates.USD[to];

    console.warn(`No se encontró tasa de ${from} a ${to}`);
    return value;
  };

  return { changeMoney, loading, rates, updated };
};
