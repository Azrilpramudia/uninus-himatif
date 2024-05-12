import { FC, ReactElement } from "react";
import { TButtonProps } from "./types";
import { cn } from "@/utils";

export const Button: FC<TButtonProps> = ({ className, ...props }): ReactElement => {
  return (
    <button
      data-testid="button"
      className={cn(
        "w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
        className,
      )}
      {...props}
    >
      {props.children}
    </button>
  );
};
