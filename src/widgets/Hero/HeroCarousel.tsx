'use client'

import { HeroSvg1, HeroSvg2, HeroSvg3 } from '@/shared/logos'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Button } from '@/shared/components'

export const HeroCarousel = () => {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [cardsCount, setCardsCount] = useState(0)

  useLayoutEffect(() => {
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
    scrollToIndex(
      direction === 'left'
        ? Math.max(activeIndex - 1, 0)
        : Math.min(activeIndex + 1, cardsCount - 1)
    )
  }

  const handleScroll = () => {
    if (!sliderRef.current) return
    const index = Math.round(sliderRef.current.scrollLeft / getScrollAmount())
    setActiveIndex(index)
  }

  return (
    <div className="space-y-4">
      <div
        ref={sliderRef}
        onScroll={handleScroll}
        className="
          flex gap-3
          overflow-x-auto md:overflow-visible
          snap-x snap-mandatory
          md:flex-col lg:flex-row
          uppercase font-p1
          scrollbar-hide
        ">
        <HeroCard>
          <HeroSvg1 className="h-15 w-20" />
          <p>надежный и быстрый интернет, который не падает</p>
        </HeroCard>

        <HeroCard>
          <HeroSvg2 className="h-15 w-25" />
          <p>КОНТРОЛЬ ВСЕЙ СЕТИ ЧЕРЕЗ ГИБКУЮ НАСТРОЙКУ</p>
        </HeroCard>

        <HeroCard>
          <HeroSvg3 className="h-15 w-fit" />
          <p>Единый инструмент для масштабирования по всей стране</p>
        </HeroCard>
      </div>

      <div className="flex items-center justify-center gap-4 md:hidden">
        <Button
          variant="primary"
          onClick={() => scroll('left')}
          className="w-10 h-10 mr-auto"
          aria-label="Previous">
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
          className="w-10 h-10 ml-auto"
          aria-label="Next">
          →
        </Button>
      </div>
    </div>
  )
}

const HeroCard = ({ children }: { children: React.ReactNode }) => (
  <div
    data-card
    className="
      snap-start
      shrink-0
      md:shrink
      w-full
      border border-blue
      p-5
      rounded-lg
      flex flex-col justify-between
      h-55
      gradient-blue
    ">
    {children}
  </div>
)
