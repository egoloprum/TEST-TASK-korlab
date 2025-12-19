import { FooterSvg1, FooterSvg2 } from '@/shared/logos'
import Link from 'next/link'

export const Footer = ({}) => {
  return (
    <footer className="flex flex-col gap-10">
      <h4 className="font-h5">Дефолтный подвал</h4>
      <section className="font-p5 tracking-wide grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-gray">
        {/* OOO */}
        <p className="max-w-50 col-start-1 row-start-1">
          ООО «Ньюком Дистрибьюшн»,ОГРН: 1207700420784,Юридический адрес:
          119017, Российская Федерация, г. Москва, ул. Большая Ордынка, д. 54
          стр. 2
        </p>
        {/* mrnet */}
        <div className="flex flex-col gap-4 col-start-1 row-start-2 sm:row-start-1 sm:col-start-2 md:row-start-1 md:col-start-2 lg:row-start-2 lg:col-start-1">
          <FooterSvg1 className="w-full h-full max-w-45 max-h-10" />
          <h5 className="uppercase max-w-45">
            КАТЕГОРИЧЕСКИ НОВЫЙ ИНТЕРНЕТ ДЛЯ БИЗНЕСА
          </h5>
        </div>
        {/* pochta */}
        <div className="col-start-1 row-start-3 sm:row-start-2 sm:col-start-1 md:row-start-1 md:col-start-3 lg:row-start-1 lg:col-start-2">
          <p>
            Почта:{' '}
            <Link
              className="underline underline-offset-2"
              href="email:info@mrnet.ru">
              info@mrnet.ru
            </Link>
          </p>
          <p>График работы: по будням</p>
          <p>c 9:00 до 19:00 по Москве</p>
        </div>
        {/* slubja */}
        <div className="col-start-1 row-start-4 sm:row-start-4 sm:col-start-2 md:row-start-2 md:col-start-3 lg:row-start-2 lg:col-start-2">
          <p>Служба поддержки:</p>
          <p>
            Тел:{' '}
            <Link
              className="underline underline-offset-2"
              href="tel:8 (495) 308-41-51">
              8 (495) 308-41-51
            </Link>
          </p>
          <p>
            Тел:{' '}
            <Link
              className="underline underline-offset-2"
              href="tel:8 (800) 600-35-38">
              8 (800) 600-35-38
            </Link>
          </p>
          <p>
            Почта:{' '}
            <Link
              className="underline underline-offset-2"
              href="email:helpdesk@mrnet.ru">
              helpdesk@mrnet.ru
            </Link>
          </p>
          <p>График работы: 24/7</p>
        </div>
        {/* 2025 */}
        <p className="col-start-1 row-start-8 sm:row-start-4 sm:col-start-1 md:row-start-3 md:col-start-1 lg:row-start-3 lg:col-start-2 xl:col-start-2">
          ©2025 mrnet.ru Все права защищены
        </p>
        {/* polizh */}
        <div className="col-start-1 row-start-5 sm:row-start-3 sm:col-start-2 md:row-start-2 md:col-start-2 lg:row-start-1 lg:col-start-3 xl:col-start-3 flex flex-col ">
          <Link className="underline underline-offset-2" href="#">
            Пользовательское соглашение
          </Link>
          <Link className="underline underline-offset-2" href="#">
            Политика в отношении обработки персональных данных
          </Link>
          <Link className="underline underline-offset-2" href="#">
            Соглашение об обработке данных
          </Link>
          <Link className="underline underline-offset-2" href="#">
            Соглашение о порядке оказания услуг
          </Link>
          <Link className="underline underline-offset-2" href="#">
            Соглашение о технической поддержке
          </Link>
          <Link className="underline underline-offset-2" href="#">
            Требования по эксплуатации оборудования mrnet
          </Link>
          <Link className="underline underline-offset-2" href="#">
            Требования к серверным ресурсам для установки ПО
          </Link>
        </div>
        {/* intructiosn */}
        <div className="col-start-1 row-start-6 sm:row-start-2 sm:col-start-2 md:row-start-3 md:col-start-2 lg:row-start-2 lg:col-start-3 flex flex-col ">
          <Link className="underline underline-offset-2" href="#">
            Инструкция по работе с личным кабинетом
          </Link>
          <Link className="underline underline-offset-2" href="#">
            Инструкция по эксплуатации мультироутера 04
          </Link>
          <Link className="underline underline-offset-2" href="#">
            Инструкция по эксплуатации мультироутера 05
          </Link>
          <Link className="underline underline-offset-2" href="#">
            Инструкция по эксплуатации мультироутера 06
          </Link>
          <Link className="underline underline-offset-2" href="#">
            Инструкция по эксплуатации мультироутера 07
          </Link>
        </div>
        <div className="col-start-1 row-start-7 sm:row-start-3 sm:col-start-1 md:col-start-3 md:row-start-3 lg:row-start-1 lg:row-end-4 lg:col-start-4 lg:col-span-4">
          <FooterSvg2 className="w-full h-full min-h-55 min-w-55" />
        </div>
      </section>
    </footer>
  )
}
