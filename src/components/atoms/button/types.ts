import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export type TButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: "primary" | "secondary" | "danger" | "warning";
};
