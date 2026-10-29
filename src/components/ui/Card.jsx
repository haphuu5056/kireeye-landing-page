export function Card({ as: Element = "div", children, ...props }) {
  return <Element {...props}>{children}</Element>;
}
