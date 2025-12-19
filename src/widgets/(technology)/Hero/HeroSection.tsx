import { Button } from '@/shared/components'
import Image from 'next/image'

export const HeroSection = ({}) => {
  return (
    <section className="flex flex-col lg:flex-row gap-3">
      <div className="relative aspect-video w-full lg:min-w-100 rounded-lg">
        <Image
          className="object-cover rounded-lg "
          src="/technology-page/hero.svg"
          alt="hero"
          fill
          loading="lazy"
        />
      </div>
      <div className="border border-blue rounded-lg p-5 gradient-blue flex flex-col gap-10 md:gap-15 justify-between">
        <h1 className="font-p2 md:font-h4 uppercase">
          РЕШЕНИЕ mrnet С ТЕХНОЛОГИЕЙ BONDING ОБЪЕДИНЯЕТ ВСЕ ДОСТУПНЫЕ КАНАЛЫ
          СВЯЗИ В ЕДИНЫЙ ВИРТУАЛЬНЫЙ КАНАЛ, СУММИРУЕТ СКОРОСТЬ ПЕРЕДАЧИ ДАННЫХ
          И ПОВЫШАЕТ НАДЕЖНОСТЬ СОЕДИНЕНИЯ
        </h1>
        <Button variant="primary" className="w-full max-w-85 font-p4">
          оставить заявку
        </Button>
        <p className="font-p2">
          Оставьте заявку и с вами свяжется менеджер и договорится о запуске
          пилота. Без необходимости отключения от текущего провайдера и
          заключения договора. Все цены рассчитываются индивидуально под клиента
        </p>
      </div>
    </section>
  )
}
