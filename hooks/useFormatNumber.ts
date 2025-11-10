export const formatNumber = (value: string | number): string => {
  if (value === null || value === undefined || value === "") return "0";

  // Convertir a número si es string
  const numberValue =
    typeof value === "string" ? Number(value.replace(/,/g, "")) : value;

  if (isNaN(numberValue)) return "0";

  // Solo formato de miles, sin forzar decimales
  return numberValue.toLocaleString("en-US");
};
