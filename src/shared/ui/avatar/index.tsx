import { FC } from 'react'

interface AvatarProps {
  src: string
  alt: string
  size?: 'big' | 'small'
}

export const Avatar: FC<AvatarProps> = ({ size = 'big', src, alt }) => {
  const sizeStyle = size === 'big' ? 'w-80 h-80' : 'w-10 h-10'
  return (
    <img
      className={`${sizeStyle} rounded-full object-cover`}
      src={src}
      alt={alt}
    />
  )
}
