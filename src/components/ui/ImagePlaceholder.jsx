export function ImagePlaceholder({
  children,
  className,
  mediaClassName,
}) {
  return (
    <div className={className}>
      <div className={mediaClassName}>{children}</div>
    </div>
  );
}
