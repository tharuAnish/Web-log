"use server"

import { signIn, signOut } from "@/utils/auth"

//Auth
export async function loginAction() {
  await signIn("github")
}
export async function loginAction() {
  await signIn("google")
}

export async function logoutAction() {
  await signOut()
}
