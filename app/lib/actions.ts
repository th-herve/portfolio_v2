"use server";

import { contactSchema, ContactSchema } from "@/app/lib/schemas";

type Response = { success: boolean; error?: string };

export async function sendMessage(formData: ContactSchema): Promise<Response> {
  const parse = contactSchema.safeParse(formData);

  if (parse.success) {
    return { success: true };
  } else {
    return { success: false };
  }
}
