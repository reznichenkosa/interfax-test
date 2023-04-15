import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react'

type InputProps = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'styles'
>

export const Input: FC<InputProps> = ({ type = 'text', ...otherProps }) => {
  return (
    <input
      {...otherProps}
      type={type}
      className="px-4 py-2 border-blue-400 border-2 rounded-md"
    />
  )
}
