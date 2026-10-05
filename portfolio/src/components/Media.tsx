type Props = {
  src?: string
  alt?: string
  fallback: string
  fit?: 'cover' | 'contain'
  pad?: string
  fallbackSize?: string
  className?: string
}

export default function Media({
  src,
  alt = '',
  fallback,
  fit = 'cover',
  pad = 'p-6',
  fallbackSize = 'text-5xl',
  className = '',
}: Props) {
  return (
    <div className={`overflow-hidden rounded-xl bg-line ${className}`}>
      {src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`rounded-2xl h-full w-full transition duration-500 group-hover:scale-105 ${
            fit === 'contain' ? `object-contain ${pad}` : 'object-cover'
          }`}
        />
      ) : (
        <div
          aria-hidden
          className={`flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 font-bold text-white ${fallbackSize}`}
        >
          {fallback}
        </div>
      )}
    </div>
  )
}