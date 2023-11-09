'use client'

import { Location } from '@/components/location'
import { Person } from '@/components/person'
import { usePathname } from 'next/navigation'
import { FC, useEffect, useState } from 'react'

// components

export const Footer: FC = () => {
  const pathname = usePathname()
  const [footerClass, setFooterClass] = useState('footer--initial')

  useEffect(() => {
    setTimeout(() => setFooterClass(''), 500)
  }, [])

  return (
    <footer className={footerClass}>
      <Person pathname={pathname} />

      <Location />
    </footer>
  )
}
