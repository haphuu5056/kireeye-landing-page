"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

export default function Error({ error, retry }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main
      id="main"
      className="flex min-h-[70vh] flex-1 items-center justify-center px-4 py-16 sm:px-6"
    >
      <div className="w-full max-w-lg rounded-3xl border border-border bg-card p-8 text-center shadow-sm sm:p-10">
        <span
          aria-hidden="true"
          className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-soft-lavender text-lg font-semibold text-primary"
        >
          k
        </span>
        <h1 className="mt-5 font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Something went wrong
        </h1>
        <p className="mt-3 text-base leading-7 text-muted-foreground">
          We couldn’t load this page. Please try again.
        </p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            type="button"
            onClick={() => retry()}
            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Try again
          </Button>
          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center rounded-full border border-border px-6 text-sm font-medium text-foreground transition hover:bg-muted"
          >
            Go to homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
