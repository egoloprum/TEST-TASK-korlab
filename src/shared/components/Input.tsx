import { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  textLabel?: string
  textError?: string
  className?: string
}

export const Input = ({
  textLabel,
  textError,
  className,
  children,
  id,
  placeholder,
  disabled,
  ...rest
}: InputProps) => {
  const wrapperClasses = ['border rounded-full border-blue', className].join(
    ' '
  )
  return (
    <div>
      {textLabel && <label htmlFor={id}>{textLabel}</label>}
      <div className={wrapperClasses}>
        <input
          id={id}
          className="input px-4 py-3 w-full rounded-full outline-0 focus:shadow-lg focus:shadow-blue/50 focus:ring-2 focus:ring-blue bg-black"
          placeholder={placeholder}
          disabled={disabled}
          {...rest}
        />
        {children && <button type="button">{children}</button>}
      </div>
      {textError && <p className="">{textError}</p>}
    </div>
  )
}
