import { FC, ReactElement } from "react";
import { TButtonProps } from "./types";
import { cn } from "@/utils";

export const Button: FC<TButtonProps> = ({ variant = "primary", ...props }): ReactElement => {
  const buttonClassName = cn("w-full font-bold py-2 px-4 rounded", {
    "bg-blue-500 hover:bg-blue-700 text-white": variant === "primary",
    "bg-green-500 hover:bg-green-700 text-white": variant === "secondary",
    "bg-yellow-500 hover:bg-yellow-700 text-white": variant === "warning",
    "bg-red-500 hover:bg-red-700 text-white": variant === "danger",
  });

  return (
    <button data-testid="button" className={buttonClassName} {...props}>
      {props.children}
    </button>
  );
};
