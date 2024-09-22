"use server"

import { signIn, signOut } from "@/auth"

//Auth
export async function loginAction() {
  await signIn("github")
}

export async function logoutAction() {
  await signOut()
}
