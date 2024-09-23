"use server"

import { signIn, signOut } from "@/utils/auth"
import prisma from "@/utils/connect"

// Auth
export async function loginWithGithub() {
  await signIn("github")
}

export async function loginWithGoogle() {
  await signIn("google")
}

export async function logoutAction() {
  await signOut()
}

// action to fetch categories
export const fetchCategories = async () => {
  try {
    const categories = await prisma.category.findMany()
    return categories
  } catch (err) {
    console.error("Error fetching categories:", err)
    throw new Error("Failed to fetch categories")
  }
}
