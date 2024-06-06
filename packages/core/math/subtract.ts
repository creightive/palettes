import { toNumber } from "#transform";
export const subtract = (a: number | string, b: number | string) => toNumber(a) - toNumber(b);
