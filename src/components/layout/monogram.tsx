import { cn } from "@/lib/utils";
import { profile } from "@/data/site";

export function Monogram({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex size-9 items-center justify-center rounded-md bg-fg text-[11px] font-semibold tracking-[0.08em] text-bg",
        className,
      )}
      aria-hidden="true"
    >
      {profile.initials}
    </span>
  );
}