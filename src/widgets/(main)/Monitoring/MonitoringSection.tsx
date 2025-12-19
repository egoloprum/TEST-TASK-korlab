import { Button } from '@/shared/components'
import Image from 'next/image'

export const MonitoringSection = ({}) => {
  return (
    <div className="space-y-5 lg:space-y-10 my-10 lg:my-15">
      <h2 className="font-h4 lg:font-h3 uppercase max-w-5xl">
        Настраивайте сеть и управляйте всеми устройствами через единый личный
        кабинет
      </h2>
      <section className="flex flex-col md:flex-row gap-3">
        <div className="flex flex-col gap-3">
          <div className="gradient-blue p-5 border border-(--color-blue) rounded-lg h-full min-h-55 flex flex-col justify-between w-full">
            <h3 className="font-h5 md:font-h4 uppercase">мониторинг</h3>
            <p className="font-p2 flex flex-col gap-4 w-full">
              <span>Графики потребления трафика</span>
              <span>
                Просмотр подключенных к мультироутеру сетевых устройств
              </span>
            </p>
          </div>
          <div className="gradient-blue p-5 border border-(--color-blue) rounded-lg h-full min-h-55 flex flex-col justify-between w-full">
            <h3 className="font-h5 md:font-h4 uppercase">тонкая настройка</h3>
            <p className="font-p2 flex flex-col gap-4 w-full">
              <span>Настройка тоннелей PPTP, L2TP, GRE, IPIP</span>
              <span>Настройка пробросов портов</span>
            </p>
          </div>
        </div>
        <div className="relative aspect-video w-full rounded-lg">
          <Image
            className="object-cover rounded-lg"
            src="/main-page/macbook.svg"
            alt="macbook"
            fill
            loading="lazy"
          />
        </div>
      </section>
      <div className="flex">
        <Button
          variant="primary"
          className="font-p4 sm:max-w-85 w-full mx-auto">
          Испытать все возможности
        </Button>
      </div>
    </div>
  )
}
