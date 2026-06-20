export function Badge({ children, role }) {
  return (
    <span
      role={role}
      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-brand-gray-100 text-brand-gray-600 border border-brand-gray-200"
    >
      {children}
    </span>
  )
}
