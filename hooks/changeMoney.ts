import { VALUES } from "@/constants/values";
import { peso } from "@/scripts/peso";
import { dollar } from "@/scripts/dollar";
import { euro } from "@/scripts/euro";
import { gbp } from "@/scripts/gbp";

export const changeMoney = (value:number, currency:string, newCurrency:string) => {
  if (currency === newCurrency) return value;
  switch (currency) {
    case VALUES.MXN:
      switch (newCurrency) {
        case VALUES.USD:
          return value / peso.usd;
        case VALUES.EUR:
          return value / peso.eur;
        case VALUES.GBP:
          return value / peso.gbp;
        default:
          return value;
      }
    case VALUES.USD:
      switch (newCurrency) {
        case VALUES.MXN:
          return value * dollar.mxn;
        case VALUES.EUR:
          return value * dollar.eur;
        case VALUES.GBP:
          return value * dollar.gbp;
        default:
          return value;
      }
    case VALUES.EUR:
      switch (newCurrency) {
        case VALUES.MXN:
          return value * euro.mxn;
        case VALUES.USD:
          return value * euro.usd;
        case VALUES.GBP:
          return value * euro.gbp;
        default:
          return value;
      }
    case VALUES.GBP:
      switch (newCurrency) {
        case VALUES.MXN:
          return value * gbp.mxn;
        case VALUES.USD:
          return value * gbp.usd;
        case VALUES.EUR:
          return value * gbp.eur;
        default:
          return value;
      }
    default:
      return value;
  };
}