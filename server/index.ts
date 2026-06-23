import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import { bookingSchema, leadSchema, scoreLead } from "../lib/validation";

const app = express();
const port = Number(process.env.PORT ?? 4000);

app.use(helmet());
app.use(express.json({ limit: "48kb" }));
app.use(
  rateLimit({
    windowMs: 60_000,
    limit: 24,
    standardHeaders: true,
    legacyHeaders: false
  })
);

app.get("/health", (_request, response) => {
  response.json({ ok: true, service: "belvo-api" });
});

app.post("/leads", (request, response) => {
  const parsed = leadSchema.safeParse(request.body);

  if (!parsed.success) {
    response.status(400).json({ ok: false, errors: parsed.error.flatten() });
    return;
  }

  response.json({
    ok: true,
    score: scoreLead(parsed.data),
    nextAction: "Create CRM lead and notify strategy team."
  });
});

app.post("/bookings", (request, response) => {
  const parsed = bookingSchema.safeParse(request.body);

  if (!parsed.success) {
    response.status(400).json({ ok: false, errors: parsed.error.flatten() });
    return;
  }

  response.json({
    ok: true,
    score: scoreLead(parsed.data),
    nextAction: "Reserve slot, create video meeting, and sync to CRM."
  });
});

app.listen(port, () => {
  console.log(`BELVO API listening on http://localhost:${port}`);
});
