import { Header } from '@/widgets/Header'
import { HeroSection } from '@/widgets/Hero'

export default function Home() {
  return (
    <>
      <Header />
      <main className="my-10">
        <HeroSection />
      </main>
    </>
  )
}
