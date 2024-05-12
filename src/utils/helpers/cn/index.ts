import clsx from "clsx";
import { ClassArray } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassArray) => {
  return twMerge(clsx(...inputs));
};
