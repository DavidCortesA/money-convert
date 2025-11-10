import { API_KEY } from "@/constants/token";

export const gbp = {
  "gbp": 1,
  "usd": 1.22,
  "eur": 1.15,
  "mxn": 24.36,
}

export default async function getGBP() {
  const r = await fetch(`https://api.fastforex.io/fetch-multi?from=GBP&to=EUR%2CMXN%2CGBP%2CUSD&api_key=${API_KEY}`);
  const data = await r.json();
  return data;
}