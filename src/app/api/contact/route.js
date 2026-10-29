import { NextResponse } from "next/server";
import { validateContact } from "@/lib/validation";
export async function POST(request) {
    let body;
    try {
        body = (await request.json());
    }
    catch {
        return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    }
    const errors = validateContact(body);
    if (Object.keys(errors).length) {
        return NextResponse.json({ errors }, { status: 400 });
    }
    // TODO: Send this waitlist/contact message with your email provider
    // (Resend, SendGrid, or a form backend). Do not log secrets.
    console.info("[contact] placeholder submission", {
        name: body.name.trim(),
        email: body.email.trim(),
        message: body.message?.trim() ?? "",
    });
    return NextResponse.json({ ok: true });
}
