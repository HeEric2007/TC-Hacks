import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes (same helper Aceternity UI components expect). */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
