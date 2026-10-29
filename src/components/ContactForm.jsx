"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { validateContact } from "@/lib/validation";
export function ContactForm({ content }) {
    const [status, setStatus] = useState("idle");
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");
    async function onSubmit(event) {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const payload = {
            name: String(form.get("name") ?? ""),
            email: String(form.get("email") ?? ""),
            message: String(form.get("message") ?? ""),
        };
        const nextErrors = validateContact(payload);
        setErrors(nextErrors);
        if (Object.keys(nextErrors).length)
            return;
        setStatus("submitting");
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            if (!response.ok)
                throw new Error("Request failed");
            setStatus("success");
            setMessage(content.success);
            event.currentTarget.reset();
        }
        catch {
            setStatus("error");
            setMessage("Something went wrong. Please try again.");
        }
    }
    return (<form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div>
        <label htmlFor="contact-name" className="mb-1 block text-sm font-medium">
          {content.fields.name}
        </label>
        <input id="contact-name" name="name" autoComplete="name" required className="h-12 w-full rounded-2xl border border-border bg-background px-4"/>
        {errors.name ? <p className="mt-1 text-sm text-red-600">{errors.name}</p> : null}
      </div>
      <div>
        <label htmlFor="contact-email" className="mb-1 block text-sm font-medium">
          {content.fields.email}
        </label>
        <input id="contact-email" name="email" type="email" autoComplete="email" required className="h-12 w-full rounded-2xl border border-border bg-background px-4"/>
        {errors.email ? <p className="mt-1 text-sm text-red-600">{errors.email}</p> : null}
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-1 block text-sm font-medium">
          {content.fields.message}
        </label>
        <textarea id="contact-message" name="message" rows={4} className="w-full rounded-2xl border border-border bg-background px-4 py-3"/>
        {errors.message ? (<p className="mt-1 text-sm text-red-600">{errors.message}</p>) : null}
      </div>
      <Button type="submit" disabled={status === "submitting"} className="inline-flex h-12 w-full items-center justify-center rounded-2xl bg-primary font-medium text-primary-foreground transition hover:opacity-90 disabled:opacity-60">
        {status === "submitting" ? "Sending…" : content.submitLabel}
      </Button>
      {message ? (<p className="text-sm text-muted-foreground" role="status">
          {message}
        </p>) : null}
    </form>);
}
