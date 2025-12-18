import { ClientsScroll } from '@/widgets/ClientsScroll'
import { Header } from '@/widgets/Header'
import { HeroSection } from '@/widgets/Hero'
import { TechnologySection } from '@/widgets/Technology'

export default function Home() {
  return (
    <>
      <Header />
      <main className="my-10">
        <HeroSection />
        <ClientsScroll />
        <TechnologySection />
      </main>
    </>
  )
}
