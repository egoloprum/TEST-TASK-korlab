import {
  HeroSection,
  OperationsSection,
  SchemesSection,
  SolutionsSection,
  SupportSection
} from '@/widgets/(technology)'

const Page = ({}) => {
  return (
    <main className="my-10 py-20 xl:py-10 px-5">
      <HeroSection />
      <OperationsSection />
      <SchemesSection />
      <SolutionsSection />
      <SupportSection />
    </main>
  )
}

export default Page
