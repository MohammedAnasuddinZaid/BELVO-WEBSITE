import { NextResponse } from "next/server";
import { bookingSchema, scoreLead } from "@/lib/validation";

export async function POST(request: Request) {
  const json = await request.json().catch(() => null);
  const parsed = bookingSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, errors: parsed.error.flatten() }, { status: 400 });
  }

  return NextResponse.json({
    ok: true,
    booking: {
      ...parsed.data,
      score: scoreLead(parsed.data),
      status: "requested"
    },
    integrations: ["Google Meet", "Zoom", "Calendly webhook placeholder"]
  });
}
