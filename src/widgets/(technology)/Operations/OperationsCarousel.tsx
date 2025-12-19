'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Button } from '@/shared/components'

export const OperationsCarousel = () => {
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

  const operations = [
    {
      src: '/technology-page/operation-1.svg',
      alt: 'operation-1',
      title:
        'ПО «Бондинг» агрегирует несколько операторов связи в мультироутере'
    },
    {
      src: '/technology-page/operation-2.svg',
      alt: 'operation-2',
      title:
        'ПО «Платформа управления сетевыми устройствами» в облаке обеспечивает мониторинг и управление'
    },
    {
      src: '/technology-page/operation-3.svg',
      alt: 'operation-3',
      title:
        'Агрегирование нескольких каналов и облачная платформа повышают отказоустойчивость интернета'
    }
  ]

  return (
    <div className="space-y-4">
      <section
        ref={sliderRef}
        onScroll={handleScroll}
        className="
          flex flex-row gap-3
          overflow-x-auto snap-x snap-mandatory
          scrollbar-hide
          md:grid md:grid-cols-1 lg:grid-cols-3 lg:gap-3 lg:overflow-visible lg:snap-none
        ">
        {operations.map((op, i) => (
          <div
            key={i}
            data-card
            className="snap-start shrink-0 w-full border border-red rounded-lg p-5 flex flex-col md:flex-row lg:flex-col gap-5 justify-between">
            <div className="relative aspect-video w-full rounded-lg">
              <Image
                className="object-cover rounded-lg"
                src={op.src}
                alt={op.alt}
                fill
                loading="lazy"
              />
            </div>
            <h3 className="font-h5 uppercase">{op.title}</h3>
          </div>
        ))}
      </section>

      <div className="flex items-center justify-center gap-4 md:hidden">
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
