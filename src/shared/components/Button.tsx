import Link from 'next/link'
import {
  ReactNode,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  HTMLAttributeAnchorTarget
} from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant?: 'primary' | 'secondary' | 'ghost'
    href?: string
    className?: string
    target?: HTMLAttributeAnchorTarget
    children: ReactNode
  }

export const Button = ({
  href,
  children,
  className,
  target = '_self',
  variant = 'primary',
  ...rest
}: ButtonProps) => {
  const variants = {
    primary:
      'bg-blue text-black hover:bg-blue-hover active:shadow-lg active:shadow-blue/50 active:ring-2 active:ring-blue',
    secondary: 'bg-gray-500',
    ghost: 'bg-transparent'
  }

  const generalClass =
    'uppercase px-4 py-2 rounded-xl cursor-pointer font-medium'

  const combinedClass = [variants[variant], generalClass, className]
    .filter(Boolean)
    .join(' ')

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        className={[
          combinedClass,
          'hover:underline decoration-inherit underline-offset-2'
        ].join(' ')}
        {...rest}>
        {children}
      </Link>
    )
  }
  return (
    <button className={combinedClass} {...rest}>
      {children}
    </button>
  )
}
