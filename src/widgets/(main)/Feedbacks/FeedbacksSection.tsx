'use client'

import { useEffect, useRef, useState } from 'react'
import { FeedbackCard } from './FeedbackCard'
import { Button } from '@/shared/components'

export const FeedbacksSection = () => {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [cardsCount, setCardsCount] = useState(0)

  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  useEffect(() => {
    if (!sliderRef.current) return
    setCardsCount(sliderRef.current.querySelectorAll('[data-card]').length)
  }, [])

  const getScrollAmount = () => {
    if (!sliderRef.current) return 0
    const card = sliderRef.current.querySelector<HTMLDivElement>('[data-card]')
    if (!card) return 0
    return card.offsetWidth + 12
  }

  const scrollToIndex = (index: number) => {
    if (!sliderRef.current) return
    const scrollAmount = getScrollAmount()

    sliderRef.current.scrollTo({
      left: index * scrollAmount,
      behavior: 'smooth'
    })
  }

  const scroll = (direction: 'left' | 'right') => {
    const nextIndex =
      direction === 'left'
        ? Math.max(activeIndex - 1, 0)
        : Math.min(activeIndex + 1, cardsCount - 1)

    setActiveIndex(nextIndex)
    scrollToIndex(nextIndex)
  }

  const handleScroll = () => {
    if (!sliderRef.current) return
    const scrollAmount = getScrollAmount()
    const index = Math.round(sliderRef.current.scrollLeft / scrollAmount)
    setActiveIndex(index)
  }

  const onMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return

    isDragging.current = true
    startX.current = e.pageX - sliderRef.current.offsetLeft
    scrollLeft.current = sliderRef.current.scrollLeft
  }

  const onMouseLeave = () => {
    isDragging.current = false
  }

  const onMouseUp = () => {
    isDragging.current = false
  }

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !sliderRef.current) return

    e.preventDefault()
    const x = e.pageX - sliderRef.current.offsetLeft
    const walk = x - startX.current
    sliderRef.current.scrollLeft = scrollLeft.current - walk
  }

  return (
    <div className="space-y-5 lg:space-y-10 my-10 md:my-15 lg:my-20">
      <h2 className="font-h4 lg:font-h3 uppercase max-w-5xl">
        95% клиентов выбирают mrnet после тест-драйва
      </h2>

      <section
        ref={sliderRef}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onMouseMove={onMouseMove}
        onScroll={handleScroll}
        className="
          flex gap-3
          overflow-x-hidden
          snap-x snap-mandatory
          pb-4
        ">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            data-card
            className="snap-start shrink-0 w-full md:max-w-120 lg:max-w-130">
            {i === 0 && (
              <FeedbackCard
                company="Шоколадница"
                name="Чистяков Марк"
                role="Начальник управления"
                dept="Управление эксплуатации и развития ИТ-сервисов"
                text="Мы обратились к mrnet, поскольку нам было необходимо обеспечить стабильный сигнал для видеонаблюдения, эквайринга и работы кафе в проблемных точках. Сотрудники компании предложили отличное решение: разделить сигнал на офис и зал, что повысило качество и отказоустойчивость. Сейчас мультироутеры mrnet стали основным интернет-каналом в некоторых точках, а в других локациях mrnet рассматривается в качестве резервного канала для надежности. На наш взгляд, ребята предлагают..."
              />
            )}
            {i === 1 && (
              <FeedbackCard
                company="Ермолино"
                name="Тараканов Михаил"
                role="Руководитель"
                dept="СИТ АО «Подмосковия»"
                text="У нас много торговых точек, и стабильный интернет — постоянная проблема. Мы пробовали разные решения, но это только усложняло ситуацию, добавляя путаницу со счетами с увеличением количества контрагентов. С mrnet мы смогли упорядочить документооборот и организовать управление оборудованием в одном удобном личном кабинете. Оперативная техническая поддержка стала для нас надежным помощником. Теперь более 150 наших точек продаж используют mrnet как основной канал связи, и это только начало!"
              />
            )}
            {i >= 2 && (
              <FeedbackCard
                company="Аптеки 36,6"
                name="Константин Старцев"
                role="Руководитель"
                dept="СИТ АО «Подмосковия»"
                text="Когда бизнес расширяется, особенно важна скорость партнёров и готовность помочь. Когда у провайдера в Великом Новгороде случилась авария, mrnet за несколько часов доставили мультироутер и удаленно настроили соединение в 8 из 12 наших аптек. Удобство подключения, возможность удаленного контроля всех точек из одного кабинета и реактивная поддержка в telegram — важные преимущества mrnet!"
              />
            )}
          </div>
        ))}
      </section>

      <div className="flex items-center justify-center gap-4">
        <Button
          variant="primary"
          onClick={() => scroll('left')}
          className="w-12 h-12 flex items-center justify-center mr-auto"
          aria-label="Previous">
          ←
        </Button>

        <div className="flex gap-2">
          {Array.from({ length: cardsCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`
                w-2.5 h-2.5 rounded-full transition
                ${i === activeIndex ? 'bg-blue' : 'bg-blue/30'}
              `}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <Button
          variant="primary"
          onClick={() => scroll('right')}
          className="w-12 h-12 flex items-center justify-center ml-auto"
          aria-label="Next">
          →
        </Button>
      </div>
    </div>
  )
}
