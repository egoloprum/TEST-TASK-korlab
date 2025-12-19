'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/shared/components'

export const SpecialistsCarousel = () => {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [cardsCount, setCardsCount] = useState(0)

  useEffect(() => {
    if (!sliderRef.current) return
    const count = sliderRef.current.querySelectorAll(
      ':scope > [data-card]'
    ).length
    setCardsCount(count)
  }, [])

  const getScrollAmount = () => {
    if (!sliderRef.current) return 0
    const card = sliderRef.current.querySelector<HTMLDivElement>(
      ':scope > [data-card]'
    )
    return card ? card.offsetWidth + 12 : 0
  }

  const scrollToIndex = (index: number) => {
    if (!sliderRef.current) return
    sliderRef.current.scrollTo({
      left: index * getScrollAmount(),
      behavior: 'smooth'
    })
    setActiveIndex(index)
  }

  const scroll = (direction: 'left' | 'right') => {
    const nextIndex =
      direction === 'left'
        ? Math.max(activeIndex - 1, 0)
        : Math.min(activeIndex + 1, cardsCount - 1)
    scrollToIndex(nextIndex)
  }

  const handleScroll = () => {
    if (!sliderRef.current) return
    const index = Math.round(sliderRef.current.scrollLeft / getScrollAmount())
    setActiveIndex(index)
  }

  return (
    <div className="space-y-4">
      {/* Slider */}
      <section
        ref={sliderRef}
        onScroll={handleScroll}
        className="
          flex flex-row gap-3
          overflow-x-auto snap-x snap-mandatory
          scrollbar-hide
          md:grid md:grid-cols-1 lg:grid-cols-3 lg:gap-3 lg:overflow-visible lg:snap-none
        ">
        <Card title="Ценим ваше время">
          <span>
            Подключите мультироутер с быстрым интернетом всего за 7 минут. Наши
            устройства работают по принципу Plug&apos;n&apos;Play (подключи и
            пользуйся).
          </span>
          <span>
            Вы получаете надёжную связь и отсутствие головной боли в виде
            договоров с разными провайдерами
          </span>
        </Card>

        <Card title="Безграничные Возможности">
          <span>
            Подберём оборудование для новых точек и оперативно подключим к
            интернету по любому адресу.
          </span>
          <span>
            Всё это — без необходимости заключения дополнительных контрактов
          </span>
        </Card>

        <Card title="Индивидуальный подход">
          <span>
            Мы всегда идем навстречу клиенту, предлагая оптимальное по стоимости
            решение.
          </span>
          <span>
            Заполните заявку, и в рабочее время мы за 1 час сделаем расчёт
          </span>
        </Card>
      </section>

      <div className="flex items-center justify-center gap-4 lg:hidden">
        <Button
          variant="primary"
          onClick={() => scroll('left')}
          className="w-10 h-10 mr-auto">
          ←
        </Button>

        <div className="flex gap-2">
          {Array.from({ length: cardsCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition ${
                i === activeIndex ? 'bg-blue' : 'bg-blue/30'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <Button
          variant="primary"
          onClick={() => scroll('right')}
          className="w-10 h-10 ml-auto">
          →
        </Button>
      </div>
    </div>
  )
}

const Card = ({
  title,
  children
}: {
  title: string
  children: React.ReactNode
}) => (
  <div
    data-card
    className="snap-start shrink-0 w-full gradient-red p-5 border border-red rounded-lg flex flex-col min-h-55">
    <h3 className="font-h5 md:font-h4 uppercase mb-3">{title}</h3>
    <p className="font-p2 flex flex-col gap-4">{children}</p>
  </div>
)
