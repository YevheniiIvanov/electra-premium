import { useState, type ImgHTMLAttributes } from 'react'

type SmartImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
  /** Перший робочий URL використовується автоматично; при помилці — наступний */
  sources: string[]
}

export function SmartImage({
  sources,
  alt,
  className,
  onError,
  ...rest
}: SmartImageProps) {
  const [idx, setIdx] = useState(0)
  const src = sources[idx] ?? sources[0]

  return (
    <img
      {...rest}
      src={src}
      alt={alt}
      className={className}
      referrerPolicy="no-referrer"
      onError={(e) => {
        onError?.(e)
        if (idx < sources.length - 1) setIdx((i) => i + 1)
      }}
    />
  )
}
