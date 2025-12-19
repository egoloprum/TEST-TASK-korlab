import {
  HeroSection,
  OperationsSection,
  SchemesSection,
  SolutionsSection,
  SupportSection
} from '@/widgets/(technology)'

const Page = ({}) => {
  return (
    <main className="my-10">
      <HeroSection />
      <OperationsSection />
      <SchemesSection />
      <SolutionsSection />
      <SupportSection />
    </main>
  )
}

export default Page
