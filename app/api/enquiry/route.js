import { NextResponse } from "next/server";

/**
 * Enquiry endpoint for every quiz form on the site.
 *
 * The old Tilda site posted these to Tilda's own form service using a Tilda
 * form key. That key is a credential belonging to the previous site and is
 * deliberately not reproduced here.
 *
 * To go live, set ENQUIRY_WEBHOOK_URL to your CRM / email / automation endpoint.
 * Until it is set, this route accepts the submission, logs it server-side and
 * reports `delivered: false` so the UI tells the visitor honestly that their
 * answers were not sent anywhere.
 */
export async function POST(request) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const contact = payload?.contact || {};
  if (!contact.email && !contact.phone) {
    return NextResponse.json(
      { error: "An email address or phone number is required" },
      { status: 422 }
    );
  }

  const endpoint = process.env.ENQUIRY_WEBHOOK_URL;
  if (!endpoint) {
    console.warn(
      "[enquiry] ENQUIRY_WEBHOOK_URL is not set — submission not delivered:",
      JSON.stringify({ form: payload.form, contact })
    );
    return NextResponse.json({ delivered: false, reason: "not-configured" });
  }

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, receivedAt: new Date().toISOString() }),
    });
    if (!res.ok) throw new Error(`Upstream responded ${res.status}`);
    return NextResponse.json({ delivered: true });
  } catch (error) {
    console.error("[enquiry] delivery failed:", error);
    return NextResponse.json({ delivered: false, reason: "upstream-error" }, { status: 502 });
  }
}
