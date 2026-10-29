export function Button({ as: Element = "button", children, ...props }) {
  return <Element {...props}>{children}</Element>;
}
