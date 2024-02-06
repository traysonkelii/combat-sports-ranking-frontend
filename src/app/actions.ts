"use server";

"use server";

import { redirect } from "next/navigation";

export async function navigateHome(data: FormData) {
  redirect(`/`);
}
