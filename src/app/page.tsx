import {
  ClientsScroll,
  DepartmentsSection,
  FeedbacksSection,
  HeroSection,
  MonitoringSection,
  SpecialistsSection,
  TechnologySection
} from '@/widgets/(main)'

export default function Home() {
  return (
    <main className="my-10 pt-20 xl:pt-10 px-5">
      <HeroSection />
      <ClientsScroll />
      <TechnologySection />
      <MonitoringSection />
      <SpecialistsSection />
      <FeedbacksSection />
      <DepartmentsSection />
    </main>
  )
}
