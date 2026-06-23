import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email(),
  company: z.string().min(2).max(160),
  budget: z.string().min(2).max(80),
  service: z.string().min(2).max(160),
  message: z.string().min(10).max(2000)
});

export const bookingSchema = leadSchema.extend({
  date: z.string().min(8).max(40),
  time: z.string().min(2).max(40),
  meetingType: z.enum(["Google Meet", "Zoom", "In-person", "Strategy Audit"])
});

export function scoreLead(input: z.infer<typeof leadSchema>) {
  const budget = input.budget.toLowerCase();
  const message = input.message.toLowerCase();
  let score = 52;

  if (budget.includes("50") || budget.includes("100") || budget.includes("enterprise")) score += 22;
  if (message.includes("urgent") || message.includes("launch") || message.includes("scale")) score += 10;
  if (message.includes("ai") || message.includes("automation") || message.includes("growth")) score += 8;
  if (input.company.length > 4) score += 5;

  return Math.min(score, 99);
}
