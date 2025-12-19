import {
  HeroSection,
  OperationsSection,
  SchemesSection,
  SolutionsSection,
  SupportSection
} from '@/widgets/(technology)'

const Page = ({}) => {
  return (
    <main className="my-10 pt-20 xl:pt-10 px-5">
      <HeroSection />
      <OperationsSection />
      <SchemesSection />
      <SolutionsSection />
      <SupportSection />
    </main>
  )
}

export default Page
