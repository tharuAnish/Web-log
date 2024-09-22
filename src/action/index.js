"use server"

import { signIn, signOut } from "@/utils/auth"

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
