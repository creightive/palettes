export const toNumber = (value: string | number): number => {
  return typeof value === "string" ? parseFloat(value) : value;
};
