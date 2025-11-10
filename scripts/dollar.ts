import { API_KEY } from "@/constants/token";

export const dollar = {
  "mxn": 18.61,
  "usd": 1,
  "eur": 0.99,
  "gbp": 0.86,
}

export default async function getUSD() {
  const r = await fetch(`https://api.fastforex.io/fetch-multi?from=USD&to=EUR%2CMXN%2CGBP%2CUSD&api_key=${API_KEY}`);
  const data = await r.json();
  return data;
}