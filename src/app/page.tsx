import { ClientsScroll } from '@/widgets/ClientsScroll'
import { ContactsSection } from '@/widgets/Contacts'
import { DepartmentsSection } from '@/widgets/Departments'
import { FeedbacksSection } from '@/widgets/Feedbacks'
import { Footer } from '@/widgets/Footer'
import { Header } from '@/widgets/Header'
import { HeroSection } from '@/widgets/Hero'
import { MonitoringSection } from '@/widgets/Monitoring'
import { SpecialistsSection } from '@/widgets/Specialists'
import { TechnologySection } from '@/widgets/Technology'

export default function Home() {
  return (
    <>
      <Header />
      <main className="my-10">
        <HeroSection />
        <ClientsScroll />
        <TechnologySection />
        <MonitoringSection />
        <SpecialistsSection />
        <FeedbacksSection />
        <DepartmentsSection />
        <ContactsSection />
      </main>
      <Footer />
    </>
  )
}
