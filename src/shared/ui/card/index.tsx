import { FC, PropsWithChildren } from 'react'

export const Card: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-full h-max p-4 rounded-lg shadow-xl border border-gray-300">
      {children}
    </div>
  )
}
