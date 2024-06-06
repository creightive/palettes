import React from "react";
import { sum } from "@repo/core/add";
import { subtract } from "@repo/core/subtract";
import { CompassIcon, LightingIcon } from "#icons";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  a?: number;
  b?: number;
}
const ButtonBase = ({ children }: { children: React.ReactNode }) => (
  <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
    {children}
  </button>
);

export const Button = ({ children, a = 1, b = 2 }: ButtonProps) => {
  return (
    <ButtonBase>
      <span>{`Sum: ${sum(a, b)} --- Sub: ${subtract(a, b)}`}</span>
      {children}
    </ButtonBase>
  );
};

export const ButtonWithIcon = ({ children, a = 1, b = 2 }: ButtonProps) => {
  return (
    <ButtonBase>
      <CompassIcon />
      {children}
    </ButtonBase>
  );
};
