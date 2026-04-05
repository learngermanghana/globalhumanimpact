export default function SectionHeader({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) {
  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      {subtitle ? <p className="text-neutral-600">{subtitle}</p> : null}
    </div>
  )
}
