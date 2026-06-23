import { NextResponse } from "next/server";
import { leadSchema, scoreLead } from "@/lib/validation";

export async function POST(request: Request) {
  const json = await request.json().catch(() => null);
  const parsed = leadSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, errors: parsed.error.flatten() }, { status: 400 });
  }

  const score = scoreLead(parsed.data);

  return NextResponse.json({
    ok: true,
    lead: {
      ...parsed.data,
      score,
      status: score >= 78 ? "priority" : "qualified"
    },
    recommendation: score >= 78 ? "Route to senior strategist within 4 hours." : "Queue for consultation review."
  });
}
