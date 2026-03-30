import type { ReactNode } from 'react'

interface Props {
  badge?: string
  title: string
  description?: string
  children: ReactNode
  className?: string
}

export function SectionCard({ badge, title, description, children, className = '' }: Props) {
  return (
    <section className={`dash-card ${className}`.trim()}>
      <div className="dash-section-head">
        {badge ? <span className="dash-badge">{badge}</span> : null}
        <h2 className="dash-section-head__title">{title}</h2>
        {description ? <p className="dash-section-head__desc">{description}</p> : null}
      </div>
      {children}
    </section>
  )
}
