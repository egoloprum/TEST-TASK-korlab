'use client'

import { Button } from '@/shared/components'
import { Logo } from '@/shared/logos'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export const Header = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header className="fixed z-10 bg-black top-0 w-full p-5 flex justify-between items-start lg:items-center xl:items-end">
      <div className="flex md:gap-8 lg:gap-0 xl:gap-12 items-end flex-col sm:flex-row lg:flex-col xl:flex-row z-20">
        <Link href="/" onClick={() => setIsMenuOpen(false)}>
          <Logo className="w-45 h-10" />
        </Link>
        <Button
          variant="ghost"
          className="text-(--color-blue) font-p4 lg:font-p5 pr-0"
          href="tel:+78006003538">
          + 7 (800) 600-35-38
        </Button>
      </div>

      <Button
        variant="ghost"
        className="block lg:hidden pr-0 z-50"
        onClick={() => setIsMenuOpen(v => !v)}
        aria-label="Toggle menu">
        {isMenuOpen ? (
          <X className="text-(--color-blue)" />
        ) : (
          <Menu className="text-(--color-blue)" />
        )}
      </Button>

      <nav className="hidden lg:flex xl:gap-8 lg:items-center xl:items-end">
        <NavItem href="/technology" active={pathname === '/technology'}>
          Технология
        </NavItem>
        <NavItem href="/" active={pathname === '/platform'}>
          Платформа управления
        </NavItem>
        <NavItem href="/" active={pathname === '/test-drive'}>
          Тест-драйв
        </NavItem>
        <NavItem href="/" active={pathname === '/net'}>
          Наша сеть
        </NavItem>
        <NavItem href="#contact" active={pathname.includes('#contact')} accent>
          Оставить заявку
        </NavItem>
      </nav>

      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black flex flex-col gap-10 p-6 pt-40 lg:hidden z-10">
          <MobileNavItem
            href="/technology"
            active={pathname === '/technology'}
            onClick={() => setIsMenuOpen(false)}>
            Технология
          </MobileNavItem>
          <MobileNavItem
            href="/"
            active={pathname === '/platform'}
            onClick={() => setIsMenuOpen(false)}>
            Платформа управления
          </MobileNavItem>
          <MobileNavItem
            href="/"
            active={pathname === '/test-drive'}
            onClick={() => setIsMenuOpen(false)}>
            Тест-драйв
          </MobileNavItem>
          <MobileNavItem
            href="/"
            active={pathname === '/net'}
            onClick={() => setIsMenuOpen(false)}>
            Наша сеть
          </MobileNavItem>
          <MobileNavItem
            href="#contact"
            active={pathname.includes('#contact')}
            onClick={() => setIsMenuOpen(false)}
            className="text-blue">
            Оставить заявку
          </MobileNavItem>
        </div>
      )}
    </header>
  )
}

const NavItem = ({
  href,
  active,
  accent,
  children
}: {
  href: string
  active?: boolean
  accent?: boolean
  children: React.ReactNode
}) => (
  <Button
    variant="ghost"
    href={href}
    className={`font-p5 relative ${accent ? 'text-(--color-blue) pr-0' : ''}`}>
    {active && (
      <span className="w-2 h-2 bg-blue aspect-square absolute left-1/2 -translate-x-1/2 -top-1.25" />
    )}
    {children}
  </Button>
)

const MobileNavItem = ({
  href,
  onClick,
  active,
  className,
  children
}: {
  href: string
  onClick: () => void
  active?: boolean
  className?: string
  children: React.ReactNode
}) => (
  <Link
    href={href}
    onClick={onClick}
    className={['uppercase font-h5 relative', className].join(' ')}>
    {active && (
      <span className="w-2 h-2 bg-blue aspect-square absolute top-1/2 -translate-y-1/2 -left-3" />
    )}
    {children}
  </Link>
)
