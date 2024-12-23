type SectionBackgroundProps = {
  imageUrl: string
  className?: string
  children: React.ReactNode
  id?: string
}

export function SectionBackground({ imageUrl, className = "", children, id }: SectionBackgroundProps) {
  return (
    <section id={id} className={`relative py-20 px-4 ${className}`}>
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url("${imageUrl}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-background/70 dark:bg-background/80 backdrop-blur-[2px]" />
      </div>
      <div className="container mx-auto relative z-10">
        {children}
      </div>
    </section>
  )
} 