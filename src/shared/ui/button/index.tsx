import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  PropsWithChildren,
} from 'react'

interface ButtonProps
  extends Omit<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    'styles'
  > {}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  type = 'button',
  ...otherProps
}) => {
  return (
    <button
      {...otherProps}
      type={type}
      className="border-2 w-max border-blue-400 rounded-md px-4 py-2 text-blue-400 hover:text-white hover:bg-blue-400 transition-all ease-in-out"
    >
      {children}
    </button>
  )
}
