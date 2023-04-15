import { FC } from 'react'

interface AvatarProps {
  src: string
  alt: string
}

export const Avatar: FC<AvatarProps> = ({ src, alt }) => {
  return (
    <img className="w-80 h-80 rounded-full object-cover" src={src} alt={alt} />
  )
}
