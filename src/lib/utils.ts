import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { PrismaClient } from "@prisma/client";
import prisma from "./db";
import { notFound } from "next/navigation";
import { unstable_cache } from "next/cache";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
