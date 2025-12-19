import { DepartmentsSvg1, DepartmentsSvg2 } from '@/shared/logos'
import Image from 'next/image'

export const DepartmentsSection = ({}) => {
  return (
    <div className="space-y-5 lg:space-y-10 my-10 md:my-15 lg:my-20">
      <h2 className="font-h4 lg:font-h3 uppercase max-w-5xl">
        Подключаем к стабильному интернету по всей России
      </h2>
      <div
        className="rounded-lg border-2 border-red p-5 
                shadow-[0_0_15px_5px_rgba(255,76,0,0.3),inset_0_0_15px_5px_rgba(255,76,0,0.2)]">
        <div className="relative aspect-16/12 md:aspect-video w-full">
          <Image
            className="object-cover rounded-lg hidden md:block"
            src="/main-page/departments-1.svg"
            alt="departments-1"
            fill
            loading="lazy"
          />
          <Image
            className="object-cover rounded-lg block md:hidden"
            src="/main-page/departments-2.svg"
            alt="departments-2"
            fill
            loading="lazy"
          />
        </div>
      </div>
      <div className="gap-10 justify-center hidden md:flex">
        <div className="flex gap-2 items-center">
          <DepartmentsSvg1 className="" />
          <p className="font-p4">Наши клиенты</p>
        </div>
        <div className="flex gap-2 items-center">
          <DepartmentsSvg2 className=" w-2.5 h-2.5" />
          <p className="font-p4">Отделы продаж</p>
        </div>
      </div>
      <div className="block md:hidden">
        <p className="font-p2 sm:font-p1 mb-4">Отделы продаж:</p>
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {departmentClients.map((client, index) => (
            <li className="flex gap-3" key={client.city}>
              <span className="w-4 h-4 aspect-square bg-blue text-black flex justify-center items-center mt-1 font-p4">
                {++index}
              </span>
              <p className="flex flex-col font-p4 sm:font-p3">
                <span>{client.city}</span>
                <span>{client.telephone}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const departmentClients = [
  {
    city: 'Москва',
    telephone: '8 800 600 35 38'
  },
  {
    city: 'Санкт-Петербург',
    telephone: '8 931 394 46 11'
  },
  {
    city: 'Казань',
    telephone: '8 904 769 96 54'
  },
  {
    city: 'Краснодар',
    telephone: '8 993 307 01 77'
  },
  {
    city: 'Челябинск',
    telephone: '8 922 636 86 06'
  },
  {
    city: 'Екатеринбург',
    telephone: '8 902 635 22 39'
  },
  {
    city: 'Новосибирск',
    telephone: '8 902 635 22 39'
  },
  {
    city: 'Владивосток',
    telephone: '8 902 635 22 39'
  }
]
