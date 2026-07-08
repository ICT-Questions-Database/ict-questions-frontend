"use server"

import { clearAuthSession } from "./authCookies";

export default async function LogoutUser() {
    await clearAuthSession();
    return { success: true };
}
