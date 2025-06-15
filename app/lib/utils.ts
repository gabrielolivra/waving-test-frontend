import { tv } from "tailwind-variants"
import { clsx } from "clsx"

export function cn(...inputs: any[]) {
  return clsx(inputs)
}
