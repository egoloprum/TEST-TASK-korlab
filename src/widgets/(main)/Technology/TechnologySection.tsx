import { Button } from '@/shared/components'
import Image from 'next/image'

export const TechnologySection = ({}) => {
  return (
    <div className="space-y-5 lg:space-y-10 my-10 lg:my-15">
      <h2 className="font-h4 lg:font-h3 uppercase">технология</h2>
      <section className="flex gap-3 flex-col lg:flex-row">
        <div className="relative aspect-video w-full rounded-lg">
          <Image
            className="object-cover rounded-lg"
            src="/main-page/technology.svg"
            alt="technology"
            fill
            loading="lazy"
          />
        </div>
        <div className="gradient-red p-5 border border-(--color-red) rounded-lg w-full flex flex-col justify-between gap-5 space-y-5 lg:max-w-140">
          <p className="font-p2 lg:font-h4">
            Прокачайте свой интернет c высокоскоростными технологиями mrnet. Наш
            мультироутер суммирует несколько каналов связи в один (технология
            бондинг), значительно повышая устойчивость и скорость соединения!
          </p>
          <Button variant="primary" className="font-p4 max-w-85 w-full">
            о технологии
          </Button>
        </div>
      </section>
      <section className="flex gap-x-3 gap-y-10 flex-col lg:flex-row mt-10 lg:mt-20">
        <div className="w-full space-y-5 lg:space-y-10">
          <h2 className="font-h4 lg:font-h3 uppercase">не балансируем</h2>
          <div className="relative aspect-video w-full rounded-lg">
            <Image
              className="object-cover rounded-lg"
              src="/main-page/train-1.svg"
              alt="train-1"
              fill
              loading="lazy"
            />
          </div>
        </div>
        <div className="w-full space-y-5 lg:space-y-10">
          <h2 className="font-h4 lg:font-h3 uppercase">а суммируем</h2>
          <div className="relative aspect-video w-full rounded-lg">
            <Image
              className="object-cover rounded-lg"
              src="/main-page/train-2.svg"
              alt="train-2"
              fill
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
