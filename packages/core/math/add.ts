import { toNumber } from "#transform";

export const sum = (a: number | string, b: number | string) => toNumber(a) + toNumber(b);
