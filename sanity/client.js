import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "tiw8s0x1",
  dataset: "production",
  apiVersion: "2025-04-24", // Add todays date
  useCdn: false,
});