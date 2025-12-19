import { Button } from '@/shared/components'
import Image from 'next/image'
import { SpecialistsCarousel } from './SpecialistsCarousel'

export const SpecialistsSection = ({}) => {
  return (
    <div className="space-y-5 lg:space-y-10 my-10 lg:my-15">
      <h2 className="font-h4 lg:font-h3 uppercase max-w-5xl">
        Решение, созданное айтишниками для айтишников
      </h2>
      <SpecialistsCarousel />
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-3 lg:mb-5">
        <div className="gradient-red-to-blue p-5 rounded-lg h-full min-h-55 flex flex-col gap-20 justify-between w-full text-black order-2 lg:order-1">
          <h3 className="font-h4 lg:font-h2 font-medium">
            Попробуйте 14 дней бесплатно
          </h3>
          <p className="font-p2 lg:font-h4">
            Развивайте свою инфру с <strong>mrnet.</strong> Без лишних затрат и
            костылей. Высокоскоростной интернет — удобно, эффективно!
          </p>
        </div>
        <div className="relative aspect-video w-full rounded-lg order-1 lg:order-2">
          <Image
            className="object-cover rounded-lg"
            src="/main-page/specialists.svg"
            alt="specialists"
            fill
            loading="lazy"
          />
        </div>
      </section>
      <div className="flex">
        <Button
          variant="primary"
          className="font-h5 sm:max-w-85 w-full mx-auto gradient-blue-to-red py-4">
          Начать!
        </Button>
      </div>
    </div>
  )
}
