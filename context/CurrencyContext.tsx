import React, { createContext, useContext, useEffect, useState } from "react";
import getUSD from "@/scripts/dollar";
import { getCachedRates } from "@/scripts/currencyCache";
import { VALUES } from "@/constants/values";
import getEUR from "@/scripts/euro";
import getMXN from "@/scripts/peso";
import getGBP from "@/scripts/gbp";

type CurrencyData = {
  [base: string]: Record<string, number>;
};

interface CurrencyContextType {
  rates: CurrencyData | null;
  loading: boolean;
  updated: any;
}

const CurrencyContext = createContext<CurrencyContextType>({
  rates: null,
  loading: true,
  updated: null,
});

export const CurrencyProvider = ({ children }: { children: React.ReactNode }) => {
  const [rates, setRates] = useState<CurrencyData| null>(null);
  const [loading, setLoading] = useState(true);
  const [updated, setUpdated] = useState<any>();

  useEffect(() => {
    (async () => {
      try {
        const [usd, eur, mxn, gbp] = await Promise.all([
          getCachedRates(VALUES.USD, getUSD),
          getCachedRates(VALUES.EUR, getEUR),
          getCachedRates(VALUES.MXN, getMXN),
          getCachedRates(VALUES.GBP, getGBP),
        ]);
  
        const mergedRates: CurrencyData = {
          USD: usd.results || usd.data || usd.updated || {},
          EUR: eur.results || eur.data || eur.updated || {},
          MXN: mxn.results || mxn.data || mxn.updated || {},
          GBP: gbp.results || gbp.data || gbp.updated || {},
        };

        const updatedData = {
          USD: usd.updated,
          EUR: eur.updated,
          MXN: mxn.updated,
          GBP: gbp.updated,
        };
        
        setUpdated(updatedData);
        setRates(mergedRates);
      } catch (err) {
        console.error("Error fetching rates:", err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <CurrencyContext.Provider value={{ rates, loading, updated }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => useContext(CurrencyContext);
