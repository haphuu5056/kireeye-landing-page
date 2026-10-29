"use client";
import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import { Button } from "@/components/ui/Button";

export function FAQAccordion({ items }) {
  const [open, setOpen] = useState(0);
  const baseId = useId();
  return (
    <div className="mt-10 py-2 divide-y divide-border rounded-3xl border border-border bg-card">
      {items.map((item, index) => {
        const expanded = open === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;
        return (
          <div key={item.question}>
            <h3>
              <Button
                id={buttonId}
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-medium"
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => setOpen(expanded ? null : index)}
              >
                {item.question}
                <ChevronDown
                  className={`h-5 w-5 shrink-0 transition ${expanded ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </Button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!expanded}
              className="px-5 pb-4 text-base leading-6 text-muted-foreground"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
