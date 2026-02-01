import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Public asset URL with basePath for GitHub Pages (e.g. /philnits-mock/...) */
export function assetPath(path: string): string {
  const base = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "")
  const p = path.startsWith("/") ? path.slice(1) : path
  return base ? `${base}/${p}` : `/${p}`
}
