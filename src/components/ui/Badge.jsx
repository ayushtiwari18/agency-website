export function Badge({ children, className = '' }) {
  return <span className={`tag-pill ${className}`}>{children}</span>
}
