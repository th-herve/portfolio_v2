"use server";
import { contactSchema, ContactSchema } from "@/app/lib/schemas";
import { appendFile } from "fs/promises";

type Response = { success: boolean; error?: string };

export async function sendMessage(formData: ContactSchema): Promise<Response> {
  const parse = contactSchema.safeParse(formData);

  const CONTACT_FILE_PATH = process.env.CONTACT_FILE ?? null;

  if (!parse.success || !CONTACT_FILE_PATH) {
    console.error("Contact form submission rejected", {
      reason: !parse.success ? "validation_failed" : "missing_file_path",
      errors: !parse.success ? parse.error : null,
      timestamp: new Date().toISOString(),
    });

    return { success: false };
  }

  try {
    const line =
      JSON.stringify({ ...parse.data, date: new Date().toString() }) + "\n";

    await appendFile(CONTACT_FILE_PATH, line);

    return { success: true };
  } catch (e) {
    console.error("Error writing to contact file", {
      error: e,
      timestamp: new Date().toISOString(),
    });

    return { success: false };
  }
}
