import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
};

export function Portrait({ src, alt, className, imgClassName, priority }: Props) {
  return (
    <div className={cn("overflow-hidden bg-elevated", className)}>
      <img
        src={src}
        alt={alt}
        className={cn("h-full w-full object-cover object-top", imgClassName)}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
      />
    </div>
  );
}

export function Avatar({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn("size-9 rounded-full object-cover object-top", className)}
    />
  );
}
