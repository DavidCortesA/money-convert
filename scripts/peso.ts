import { API_KEY } from "@/constants/token";

export const peso = {
  "mxn": 1,
  "usd": 0.052,
  "eur": 0.047,
  "gbp": 0.042,
}

export default async function getMXN() {
  const r = await fetch(`https://api.fastforex.io/fetch-multi?from=MXN&to=EUR%2CMXN%2CGBP%2CUSD&api_key=${API_KEY}`);
  const data = await r.json();
  return data;
}