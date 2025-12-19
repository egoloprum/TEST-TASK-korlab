import { Button } from '@/shared/components'
import Image from 'next/image'
import { HeroCarousel } from './HeroCarousel'

export const HeroSection = ({}) => {
  return (
    <section className="flex gap-3 flex-col">
      <div className="flex gap-3 flex-col-reverse lg:flex-row">
        <div className="gradient-red p-5 border border-(--color-red) rounded-lg w-full space-y-5">
          <h1 className="font-h3 sm:font-h2 lg:font-h1 uppercase">
            Беспроводной интернет для бизнеса
          </h1>
          <p className="font-h5 lg:font-h4 uppercase">
            <span className="block">
              от <strong>2 990</strong> рублей* в месяц!
            </span>
            <span className="block">Установка по любому адресу в РФ!</span>
          </p>
          <Button variant="primary" className="font-p4 max-w-85 w-full my-5">
            попробовать
          </Button>
          <ul className="font-p2 list-disc ml-5 my-5">
            <li>
              Мультироутер с технологией суммирования нескольких каналов связи в
              один
            </li>
            <li>Высокая скорость и отказоустойчивость интернет-соединения</li>
            <li>Единый договор на ПО, оборудование и связь</li>
            <li>Простое подключение за 7 минут</li>
            <li>Моментальная техподдержка 24/7 в Telegram</li>
          </ul>
          <p className="font-p5 text-gray tracking-normal! max-w-140">
            * Без учета стоимости оборудования, возможен выкуп оборудования или
            аренда, стоимость будет зависеть от модели мультироутера
          </p>
        </div>
        <div className="relative h-full lg:max-w-140 w-full">
          <Image
            src="/main-page/hero.svg"
            alt="Hero"
            width={1000}
            height={525}
            className="object-contain"
            priority
          />
        </div>
      </div>
      <HeroCarousel />
    </section>
  )
}
