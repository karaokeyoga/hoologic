'use client'

import { Company } from '@/components/company'
import { Logo } from '@/components/logo'
import { usePathname } from 'next/navigation'
import { FC, useEffect, useState } from 'react'

// components

export const Header: FC = () => {
  const pathname = usePathname()
  const [headerClass, setHeaderClass] = useState('header--initial')

  useEffect(() => {
    setHeaderClass('')
  }, [])

  return (
    <header className={headerClass}>
      <Company pathname={pathname} />

      <Logo pathname={pathname} />
    </header>
  )
}
