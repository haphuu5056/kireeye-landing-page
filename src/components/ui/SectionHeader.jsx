export default function SectionHeader({
  label,
  title,
  subtitle,
  className = "",
}) {
  return (
    <div className={`mx-auto max-w-2xl text-center ${className}`}>
      {label ? (
        <span className="inline-flex rounded-full bg-soft-lavender px-4 py-1.5 text-sm font-medium text-primary">
          {label}
        </span>
      ) : null}
      {title ? (
        <h2 className="font-heading mt-4 text-balance text-3xl leading-tight font-bold tracking-tight text-foreground md:text-5xl">
          {title}
        </h2>
      ) : null}
      {subtitle ? (
        <p className="mx-auto mt-3 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
