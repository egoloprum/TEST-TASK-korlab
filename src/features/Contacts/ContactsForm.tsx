'use client'

import { Button, Checkbox, Input } from '@/shared/components'
import Link from 'next/link'
import { FormEvent, useState } from 'react'

export const ContactsForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [hasError, setHasError] = useState(false)

  const [name, setName] = useState('')
  const [telephone, setTelephone] = useState('')
  const [telegram, setTelegram] = useState('')
  const [isChecked, setIsChecked] = useState(false)

  const [nameError, setNameError] = useState(false)
  const [telephoneError, setTelephoneError] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const isNameValid = Boolean(name)
    const isTelephoneValid = Boolean(telephone)

    setNameError(!isNameValid)
    setTelephoneError(!isTelephoneValid)

    if (!isNameValid || !isTelephoneValid) {
      setHasError(true)
      return
    }

    console.log({ name, telephone, telegram, isChecked })
    setHasError(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <h3 className="font-h4 uppercase h-120">
        Спасибо за&nbsp;заявку! Наши менеджеры уже взяли её в&nbsp;работу и
        скоро свяжутся с вами.
      </h3>
    )
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <h4 className="font-h5 md:font-h4 lg:font-h3 uppercase">
        Услуга доступна только для юридических лиц
      </h4>

      <Input
        id="name"
        type="text"
        placeholder="Ваше имя *"
        className={nameError ? 'border-red' : ''}
        onChange={e => setName(e.target.value)}
      />

      <legend className="my-5">Оставьте ваши контакты</legend>

      <Input
        id="telephone"
        placeholder="Ваш телефон +7 (___)___-__-__ *"
        className={telephoneError ? 'border-red' : ''}
        onChange={e => setTelephone(e.target.value)}
      />

      <Input
        id="telegram"
        placeholder="Ваш ник в tg"
        onChange={e => setTelegram(e.target.value)}
      />

      <Checkbox
        className="mt-5"
        checked={isChecked}
        onChange={e => setIsChecked(e.target.checked)}>
        Я даю{' '}
        <Link href="#" className="underline underline-offset-2">
          согласие
        </Link>{' '}
        на обработку моих персональных данных в форме обращения на странице
        сайта. Ознакомиться с условиями{' '}
        <Link href="#" className="underline underline-offset-2">
          Политики обработки персональных данных ООО «НЬЮКОМ ДИСТРИБЬЮШН»
        </Link>
      </Checkbox>

      <legend className="font-p5 text-gray tracking-normal ml-6">
        * Поля, обязательные для заполнения
      </legend>

      {hasError && (
        <span className="font-p3 text-red block">
          Пожалуйста, попробуйте ещё раз! Не все поля формы заполнены корректно.
        </span>
      )}

      <Button
        variant="primary"
        type="submit"
        className="gradient-blue-to-red lg:max-w-55 w-full mt-5">
        Начать!
      </Button>
    </form>
  )
}
