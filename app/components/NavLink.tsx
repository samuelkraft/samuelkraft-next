'use client'

import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { ReactNode } from 'react'
import styles from './NavLink.module.scss'

export default function NavLink({ href, children }: { href: string; children: ReactNode }) {
  const segment = useSelectedLayoutSegment()
  const active = href === `/${segment}`

  return (
    <Link className={active ? styles.linkActive : styles.link} href={href}>
      {children}
    </Link>
  )
}
