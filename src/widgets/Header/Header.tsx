'use client'

import { Button } from '@/shared/components'
import { Logo } from '@/shared/logos'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Header = ({}) => {
  const pathname = usePathname()

  console.log({ pathname })

  return (
    <header className="flex justify-between items-start lg:items-center xl:items-end">
      <div className="flex gap-4 md:gap-8 lg:gap-0 xl:gap-12 items-end flex-col sm:flex-row lg:flex-col xl:flex-row">
        <Link href="/">
          <Logo className="w-45 h-10" />
        </Link>
        <Button
          variant="ghost"
          className="text-(--color-blue) font-p4 lg:font-p5 pr-0"
          href="tel:+78006003538">
          + 7 (800) 600-35-38
        </Button>
      </div>
      <Button variant="ghost" className="block lg:hidden pr-0">
        <Menu className="text-(--color-blue)" />
      </Button>
      <nav className="hidden lg:flex xl:gap-8 lg:items-center xl:items-end">
        <Button variant="ghost" href="/technology" className="font-p5 relative">
          {pathname === '/technology' && (
            <span className="w-2 h-2 bg-blue aspect-square absolute left-1/2 translate-x--1/2 -top-1.25"></span>
          )}
          <span>Технология</span>
        </Button>
        <Button variant="ghost" href="/" className="font-p5 relative">
          {pathname === '/platform' && (
            <span className="w-2 h-2 bg-blue aspect-square absolute left-1/2 translate-x--1/2 -top-1.25"></span>
          )}
          <span>Платформа управления</span>
        </Button>
        <Button variant="ghost" href="/" className="font-p5 relative">
          {pathname === '/test-drive' && (
            <span className="w-2 h-2 bg-blue aspect-square absolute left-1/2 translate-x--1/2 -top-1.25"></span>
          )}
          <span>тест-драйв</span>
        </Button>
        <Button variant="ghost" href="/" className="font-p5 relative">
          {pathname === '/net' && (
            <span className="w-2 h-2 bg-blue aspect-square absolute left-1/2 translate-x--1/2 -top-1.25"></span>
          )}
          <span>Наша сеть</span>
        </Button>
        <Button
          variant="ghost"
          className="text-(--color-blue) font-p5 relative pr-0"
          href="#contact">
          {pathname.includes('#contact') && (
            <span className="w-2 h-2 bg-blue aspect-square absolute left-1/2 translate-x--1/2 -top-1.25"></span>
          )}
          <span>Оставить заявку</span>
        </Button>
      </nav>
    </header>
  )
}
