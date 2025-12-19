'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Button } from '@/shared/components'

export const SolutionsCarousel = () => {
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
    const next =
      direction === 'left'
        ? Math.max(activeIndex - 1, 0)
        : Math.min(activeIndex + 1, cardsCount - 1)
    scrollToIndex(next)
  }

  const handleScroll = () => {
    if (!sliderRef.current) return
    const index = Math.round(sliderRef.current.scrollLeft / getScrollAmount())
    setActiveIndex(index)
  }

  return (
    <div className="space-y-4">
      <section
        ref={sliderRef}
        onScroll={handleScroll}
        className="
          flex flex-row gap-3
          overflow-x-auto snap-x snap-mandatory
          scrollbar-hide
          lg:flex-row lg:overflow-visible lg:snap-none
        ">
        <SolutionCard>
          <p className="flex gap-1 font-p5 items-center">
            <span className="border border-white rounded-full aspect-square w-8 h-8 flex justify-center items-center">
              1
            </span>
            <span className="border border-white rounded-full px-4 h-8 flex items-center uppercase text-nowrap">
              у клиента
            </span>
          </p>

          <div className="flex flex-col gap-4">
            <h3 className="font-h4 uppercase">Мультироутер</h3>
            <div className="relative aspect-video w-full">
              <Image
                className="object-cover rounded-lg"
                src="/technology-page/solution.svg"
                alt="solution"
                fill
                loading="lazy"
              />
            </div>
          </div>

          <p className="mt-auto">
            Подключается к LTE-соединениям и передает данные параллельно по
            нескольким независимым каналам связи. Скорость суммируется — до 250
            Мбит/с с четырех каналов связи
          </p>
        </SolutionCard>

        <SolutionCard>
          <p className="flex gap-1 font-p5 items-center flex-wrap">
            <span className="border border-white rounded-full aspect-square w-8 h-8 flex justify-center items-center">
              2
            </span>
            <span className="border border-white rounded-full px-4 h-8 flex items-center uppercase">
              в дата центре
            </span>
            <span>или</span>
            <span className="border border-white rounded-full px-4 h-8 flex items-center uppercase">
              у клиента
            </span>
          </p>

          <div className="flex flex-col gap-4">
            <h3 className="font-h4 uppercase">ПО «Бондинг»</h3>
            <h4 className="font-h5 uppercase text-blue">
              (№ 25726 Реестр Российского ПО)
            </h4>
          </div>

          <div className="flex flex-col gap-6 font-p2 mt-auto">
            <p>
              Обеспечивает передачу данных с Мультироутера с использованием
              одновременно всех подключенных каналов до «суммирующего сервера» и
              обратно. Суммирующий сервер можно установить на ресурсах клиента.
              C / C++ / Bash
            </p>
            <p>
              <Link href="" className="underline underline-offset-2">
                Функциональные характеристики ПО «Бондинг»
              </Link>
            </p>
            <p>
              Цены на ПО «Бондинг» рассчитываются индивидуально под клиента. Для
              запроса цены{' '}
              <Link href="" className="underline underline-offset-2">
                оставьте заявку
              </Link>
            </p>
          </div>
        </SolutionCard>

        <SolutionCard>
          <p className="flex gap-1 font-p5 items-center">
            <span className="border border-white rounded-full aspect-square w-8 h-8 flex justify-center items-center">
              3
            </span>
            <span className="border border-white rounded-full px-4 h-8 flex items-center uppercase">
              в облаке
            </span>
          </p>

          <div className="flex flex-col gap-4">
            <h3 className="font-h4 uppercase">
              ПО «Платформа управления сетевыми устройствами»
            </h3>
            <h4 className="font-h5 uppercase text-blue">
              (№ 25623 Реестр Российского ПО)
            </h4>
          </div>

          <div className="flex flex-col gap-6 font-p2 mt-auto">
            <p>
              Web-интерфейс с дашбордом для мониторинга и удаленного управления
              мультироутеров mrnet и настройки сети. Python / JavaScript /
              TypeScript
            </p>
            <p>
              <Link href="#" className="underline underline-offset-2">
                Функциональные характеристики ПО «Платформа управления сетевыми
                устройствами»
              </Link>
            </p>
            <p>
              Цены на ПО «Платформа управления сетевыми устройствами»
              рассчитываются индивидуально под клиента. Для запроса цены{' '}
              <Link href="" className="underline underline-offset-2">
                оставьте заявку
              </Link>
            </p>
          </div>
        </SolutionCard>
      </section>

      <div className="flex items-center justify-center gap-4 lg:hidden">
        <Button onClick={() => scroll('left')} className="w-10 h-10 mr-auto">
          ←
        </Button>

        <div className="flex gap-2">
          {Array.from({ length: cardsCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`w-2.5 h-2.5 rounded-full ${
                i === activeIndex ? 'bg-blue' : 'bg-blue/30'
              }`}
            />
          ))}
        </div>

        <Button onClick={() => scroll('right')} className="w-10 h-10 ml-auto">
          →
        </Button>
      </div>
    </div>
  )
}

const SolutionCard = ({ children }: { children: React.ReactNode }) => (
  <div
    data-card
    className="
      snap-start shrink-0 lg:shrink w-full
      gradient-reverse-blue border border-blue rounded-lg p-5
      flex flex-col gap-3
      lg:basis-auto
    ">
    {children}
  </div>
)
