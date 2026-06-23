"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

type Mode = "lead" | "booking";

export function LeadForm({ mode = "lead" }: { mode?: Mode }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    const response = await fetch(mode === "booking" ? "/api/bookings" : "/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      setStatus("sent");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <form className="lead-form" onSubmit={onSubmit}>
      <div className="form-row">
        <label>
          <span>Name</span>
          <input name="name" required minLength={2} placeholder="Your name" />
        </label>
        <label>
          <span>Email</span>
          <input name="email" required type="email" placeholder="you@company.com" />
        </label>
      </div>
      <div className="form-row">
        <label>
          <span>Company</span>
          <input name="company" required minLength={2} placeholder="Company" />
        </label>
        <label>
          <span>Budget</span>
          <select name="budget" required defaultValue="">
            <option value="" disabled>
              Select range
            </option>
            <option>$10k - $25k</option>
            <option>$25k - $50k</option>
            <option>$50k - $100k</option>
            <option>$100k+</option>
            <option>Enterprise retainer</option>
          </select>
        </label>
      </div>
      {mode === "booking" ? (
        <div className="form-row">
          <label>
            <span>Date</span>
            <input name="date" required type="date" />
          </label>
          <label>
            <span>Time</span>
            <input name="time" required type="time" />
          </label>
        </div>
      ) : null}
      {mode === "booking" ? (
        <label>
          <span>Meeting Type</span>
          <select name="meetingType" required defaultValue="Google Meet">
            <option>Google Meet</option>
            <option>Zoom</option>
            <option>In-person</option>
            <option>Strategy Audit</option>
          </select>
        </label>
      ) : null}
      <label>
        <span>Project Type</span>
        <select name="service" required defaultValue="">
          <option value="" disabled>
            Choose focus
          </option>
          <option>Full growth system</option>
          <option>Brand and identity</option>
          <option>AI automation</option>
          <option>Website or app development</option>
          <option>Performance marketing</option>
          <option>Analytics and dashboards</option>
        </select>
      </label>
      <label>
        <span>Message</span>
        <textarea name="message" required minLength={10} rows={5} placeholder="Tell us what needs to happen." />
      </label>
      <button className="primary-button" type="submit" disabled={status === "sending"}>
        {status === "sent" ? <CheckCircle2 size={18} /> : <Send size={18} />}
        <span>{status === "sending" ? "Sending" : status === "sent" ? "Signal received" : mode === "booking" ? "Request consultation" : "Start project"}</span>
      </button>
      {status === "error" ? <p className="form-note form-note--error">Something failed validation. Check the fields and try again.</p> : null}
      {status === "sent" ? <p className="form-note">BELVO AI scored the lead and queued it for CRM review.</p> : null}
    </form>
  );
}
