import {
  ClientsScroll,
  ContactsSection,
  DepartmentsSection,
  FeedbacksSection,
  HeroSection,
  MonitoringSection,
  SpecialistsSection,
  TechnologySection
} from '@/widgets/(main)'

export default function Home() {
  return (
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
  )
}
