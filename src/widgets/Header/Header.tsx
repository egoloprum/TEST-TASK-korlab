import { Button } from '@/shared/components'
import { Logo } from '@/shared/logos'
import { Menu } from 'lucide-react'

export const Header = ({}) => {
  return (
    <header className="flex justify-between items-start lg:items-center xl:items-end">
      <div className="flex gap-4 md:gap-8 lg:gap-0 xl:gap-12 items-end flex-col sm:flex-row lg:flex-col xl:flex-row">
        <Logo className="w-45 h-10" />
        <Button
          variant="ghost"
          className="text-(--color-blue) font-p4 md:font-p5 pr-0"
          href="tel:+78006003538">
          + 7 (800) 600-35-38
        </Button>
      </div>
      <Button variant="ghost" className="block lg:hidden pr-0">
        <Menu className="text-(--color-blue)" />
      </Button>
      <nav className="hidden lg:flex lg:gap-4 xl:gap-8 lg:items-center xl:items-end">
        <Button variant="ghost" href="/technology" className="font-p5">
          Технология
        </Button>
        <Button variant="ghost" href="/" className="font-p5">
          Платформа управления
        </Button>
        <Button variant="ghost" href="/" className="font-p5">
          тест-драйв
        </Button>
        <Button variant="ghost" href="/" className="font-p5">
          Наша сеть
        </Button>
        <Button
          variant="ghost"
          className="text-(--color-blue) font-p5 pr-0"
          href="/">
          Оставить заявку
        </Button>
      </nav>
    </header>
  )
}
