import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Merge classes with tailwind-merge with clsx full feature */
export function clsMerge(...classes: ClassValue[]) {
  return twMerge(clsx(...classes));
}
