import { InputHTMLAttributes } from 'react'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

export const Checkbox = ({
  id,
  children,
  className,
  ...rest
}: CheckboxProps) => {
  const outerClass = [
    'flex gap-2 cursor-pointer has-[input:disabled]:cursor-not-allowed',
    className
  ].join(' ')

  return (
    <label className={outerClass}>
      <span className="group border border-blue w-5 h-5 aspect-square flex justify-center items-center">
        <input type="checkbox" id={id} className="peer hidden" {...rest} />

        <span className="w-2.5 h-2.5 aspect-square bg-blue peer-checked:block hidden"></span>
      </span>

      {children && (
        <span className="font-p5 text-gray tracking-normal">{children}</span>
      )}
    </label>
  )
}
