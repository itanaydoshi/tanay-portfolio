"use client";

import { Popover } from "@base-ui/react/popover";
import { CheckIcon, CopyIcon, MailIcon } from "lucide-react";
import { useState } from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type EmailCopyPopoverProps = {
  email: string;
};

export function EmailCopyPopover({ email }: EmailCopyPopoverProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <Popover.Root>
      <Popover.Trigger
        aria-label="Email"
        className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
      >
        <MailIcon className="size-4" />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Positioner side="top" sideOffset={8} align="end">
          <Popover.Popup
            initialFocus={false}
            className={cn(
              "z-50 flex items-center gap-2 rounded-lg border border-border bg-popover px-3 py-2 text-sm text-popover-foreground shadow-md",
              "origin-(--transform-origin) transition-[transform,scale,opacity]",
              "data-starting-style:scale-95 data-starting-style:opacity-0",
              "data-ending-style:scale-95 data-ending-style:opacity-0"
            )}
          >
            <span className="max-w-55 truncate">{email}</span>
            <Button
              type="button"
              variant="ghost"
              size="icon-xs"
              aria-label={copied ? "Email copied" : "Copy email"}
              onClick={handleCopy}
            >
              {copied ? <CheckIcon /> : <CopyIcon />}
            </Button>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
}
