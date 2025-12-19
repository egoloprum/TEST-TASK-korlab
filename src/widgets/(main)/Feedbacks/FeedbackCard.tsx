export const FeedbackCard = ({
  company,
  name,
  role,
  dept,
  text
}: {
  company: string
  name: string
  role: string
  dept: string
  text: string
}) => {
  return (
    <div className="gradient-blue border border-blue p-5 rounded-lg flex flex-col gap-10 h-full">
      <div className="flex justify-between gap-4 font-p4 min-h-20">
        <p className="flex flex-col text-blue">
          <span className="uppercase">{company}</span>
          <span>{name}</span>
        </p>
        <p className="flex flex-col">
          <span>{role}</span>
          <span>{dept}</span>
        </p>
      </div>
      <p className="font-p2 line-clamp-10">{text}</p>
    </div>
  )
}
