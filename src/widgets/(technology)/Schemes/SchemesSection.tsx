import Image from 'next/image'

export const SchemesSection = ({}) => {
  return (
    <div className="space-y-5 lg:space-y-10 my-10 md:my-15 lg:my-20">
      <h2 className="font-h4 lg:font-h3 uppercase max-w-5xl">
        Схема работы решения mrnet
      </h2>
      <div
        className="rounded-lg border-2 border-blue p-5 
                shadow-[0_0_15px_5px_rgba(0,228,240,0.3),inset_0_0_15px_5px_rgba(0,228,240,0.2)]">
        <div className="relative aspect-square md:aspect-video w-full">
          <Image
            className="object-fill rounded-lg hidden md:block"
            src="/technology-page/schemes-1.svg"
            alt="departments-1"
            fill
            loading="lazy"
          />
          <Image
            className="object-fill rounded-lg block md:hidden"
            src="/technology-page/schemes-2.svg"
            alt="departments-2"
            fill
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}
