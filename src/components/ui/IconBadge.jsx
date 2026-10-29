export function IconBadge({
  as: Element = "div",
  children,
  className = "",
  ...props
}) {
  return (
    <Element {...props} className={`grid h-12 w-12 place-items-center ${className}`}>
      {children}
    </Element>
  );
}
