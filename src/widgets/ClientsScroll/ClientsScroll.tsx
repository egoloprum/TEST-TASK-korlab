import Image from 'next/image'

const logos = [
  { src: '/clients/clients-1.png', alt: 'clients-1', w: 80, h: 120 },
  { src: '/clients/clients-2.png', alt: 'clients-2', w: 160, h: 160 },
  { src: '/clients/clients-3.png', alt: 'clients-3', w: 150, h: 150 },
  { src: '/clients/clients-4.png', alt: 'clients-4', w: 160, h: 160 },
  { src: '/clients/clients-5.png', alt: 'clients-5', w: 120, h: 120 },
  { src: '/clients/clients-6.png', alt: 'clients-6', w: 160, h: 160 },
  { src: '/clients/clients-7.png', alt: 'clients-7', w: 200, h: 120 }
]

export const ClientsScroll = ({}) => {
  return (
    <div className="space-y-10 font-h4 lg:font-h3 my-20 uppercase">
      <h2>500+ клиентов уже с нами</h2>

      <section className="flex overflow-hidden">
        <div className="flex animate-infinite-scroll">
          <ul className="flex gap-5">
            {logos.map(logo => (
              <li
                key={`${logo.alt}+1`}
                className="w-55 h-20 flex justify-center items-center py-4 shrink-0">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  height={logo.h}
                  width={logo.w}
                  draggable="false"
                />
              </li>
            ))}
          </ul>
          <ul className="flex gap-5">
            {logos.map(logo => (
              <li
                key={`${logo.alt}+2`}
                className="w-55 h-20 flex justify-center items-center py-4 shrink-0">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  height={logo.h}
                  width={logo.w}
                  draggable="false"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
