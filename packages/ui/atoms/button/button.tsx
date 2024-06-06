import React from "react";
import { sum } from "@repo/core/add";
import { subtract } from "@repo/core/subtract";
import { LightingIcon } from "#icons";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  a?: number;
  b?: number;
}

export const Button = ({ children, a = 1, b = 2 }: ButtonProps) => {
  return (
    <button>
      <span>{`Sum: ${sum(a, b)} --- Sub: ${subtract(a, b)}`}</span>
      {children}
    </button>
  );
};

export const ButtonWithIcon = ({ children, a = 1, b = 2 }: ButtonProps) => {
  return (
    <button>
      <LightingIcon />
      {children}
    </button>
  );
};
