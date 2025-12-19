import { SupportSvg1, SupportSvg2 } from '@/shared/logos'

export const SupportSection = ({}) => {
  return (
    <div className="space-y-5 lg:space-y-10 my-10 md:my-15 lg:my-20">
      <h2 className="font-h4 lg:font-h3 uppercase max-w-5xl">
        ТЕХПОДДЕРЖКА 24/7
      </h2>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="border border-red gradient-reverse-red rounded-lg p-5 space-y-5">
          <div className="flex flex-col md:flex-row justify-between gap-5">
            <h3 className="font-h4 uppercase">видим</h3>
            <SupportSvg1 className="max-w-20 w-full h-15" />
          </div>
          <ul className="list-disc ml-5">
            <li>Работоспособность устройств</li>
            <li>Уровень сигнала на устройстве</li>
            <li>Доступность канала передачи и узла связи</li>
          </ul>
        </div>
        <div className="border border-red gradient-reverse-red rounded-lg p-5 space-y-5">
          <div className="flex flex-col md:flex-row justify-between gap-5">
            <h3 className="font-h4 uppercase">Делаем удаленно</h3>
            <SupportSvg2 className="max-w-20 w-full h-15" />
          </div>
          <ul className="list-disc ml-5">
            <li>Настройку устройств</li>
            <li>Перезагрузку устройств</li>
            <li>Обновление ПО</li>
          </ul>
        </div>
      </section>
      <h2 className="font-h4 lg:font-h3 uppercase max-w-5xl">
        Наши специалисты на связи круглосуточно. Отвечают по телефону, в почте и
        Telegram
      </h2>
    </div>
  )
}
