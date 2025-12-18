import { Button } from '@/shared/components'
import Image from 'next/image'

export const SpecialistsSection = ({}) => {
  return (
    <div className="space-y-5 lg:space-y-10 my-10 md:my-15 lg:my-20">
      <h2 className="font-h4 lg:font-h3 uppercase max-w-5xl">
        Решение, созданное айтишниками для айтишников
      </h2>
      <section className="grid lg:grid-cols-3 gap-3 mb-3">
        <div className="gradient-red p-5 border border-(--color-red) rounded-lg h-full min-h-55 flex flex-col w-full">
          <h3 className="font-h5 md:font-h4 uppercase h-16 lg:h-25">
            Ценим ваше время
          </h3>
          <p className="font-p2 flex flex-col gap-4 w-full">
            <span>
              Подключите мультироутер с быстрым интернетом всего за 7 минут.
              Наши устройства работают по принципу Plug&apos;n&apos;Play
              (подключи и пользуйся).
            </span>
            <span>
              Вы получаете надёжную связь и отсутствие головной боли в виде
              договоров с разными провайдерами
            </span>
          </p>
        </div>
        <div className="gradient-red p-5 border border-(--color-red) rounded-lg h-full min-h-55 flex flex-col w-full">
          <h3 className="font-h5 md:font-h4 uppercase h-25">
            Безграничные Возможности
          </h3>
          <p className="font-p2 flex flex-col gap-4 w-full">
            <span>
              Подберём оборудование для новых точек и оперативно подключим к
              интернету по любому адресу.
            </span>
            <span>
              Всё это — без необходимости заключения дополнительных контрактов
            </span>
          </p>
        </div>
        <div className="gradient-red p-5 border border-(--color-red) rounded-lg h-full min-h-55 flex flex-col w-full">
          <h3 className="font-h5 md:font-h4 uppercase h-25">
            Индивидуальный подход
          </h3>
          <p className="font-p2 flex flex-col gap-4 w-full">
            <span>
              Мы всегда идем навстречу клиенту, предлагая оптимальное по
              стоимости решение.
            </span>
            <span>
              Заполните заявку, и в рабочее время мы за 1 час сделаем расчёт
            </span>
          </p>
        </div>
      </section>
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
