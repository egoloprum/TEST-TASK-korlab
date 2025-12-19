import { SolutionsCarousel } from './SolutionsCarousel'

export const SolutionsSection = ({}) => {
  return (
    <div className="space-y-5 lg:space-y-10 my-10 lg:my-15">
      <h2 className="font-h4 lg:font-h3 uppercase max-w-5xl">Состав решения</h2>
      <SolutionsCarousel />
    </div>
  )
}
