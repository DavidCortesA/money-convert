import { API_KEY } from "@/constants/token";

export const euro = {
  "mxn": 20.6,
  "usd": 1.01,
  "eur": 1,
  "gbp": 0.9,
}

export default async function getEUR() {
  const r = await fetch(`https://api.fastforex.io/fetch-multi?from=EUR&to=EUR%2CMXN%2CGBP%2CUSD&api_key=${API_KEY}`);
  const data = await r.json();
  return data;
}