export const formatNumber = (value: string | number): string => {
  if (value === null || value === undefined || value === "") return "0";

  const numberValue = typeof value === "string" ? parseFloat(value) : value;

  if (isNaN(numberValue)) return "0";

  // Formatear con comas de miles
  return numberValue.toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 4,
  });
};