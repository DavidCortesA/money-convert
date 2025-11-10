import AsyncStorage from "@react-native-async-storage/async-storage";

const TTL = 1000 * 60 * 10; // 10 minutos

export async function getCachedRates(key: string, fetcher: () => Promise<any>) {
  try {
    const cached = await AsyncStorage.getItem(`${key}_cache`);
    const timestamp = await AsyncStorage.getItem(`${key}_ts`);
    const now = Date.now();

    if (cached && timestamp && now - parseInt(timestamp) < TTL) {
      return JSON.parse(cached);
    }
    
    const data = await fetcher();
    await AsyncStorage.setItem(`${key}_cache`, JSON.stringify(data));
    await AsyncStorage.setItem(`${key}_ts`, now.toString());
    return data;
  } catch (error) {
    console.error("Error usando cache", error);
    return fetcher();
  }
}