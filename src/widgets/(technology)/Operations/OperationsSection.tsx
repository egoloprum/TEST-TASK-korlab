import { OperationsCarousel } from './OperationsCarousel'

export const OperationsSection = ({}) => {
  return (
    <div className="space-y-5 lg:space-y-10 my-10 lg:my-15">
      <h2 className="font-h4 lg:font-h3 uppercase max-w-5xl">Принцип работы</h2>
      <OperationsCarousel />
    </div>
  )
}
