import { ContactsForm } from '@/features/Contacts'

export const ContactsSection = ({}) => {
  return (
    <section
      className="space-y-5 lg:space-y-10 my-10 lg:my-15 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3"
      id="contact">
      <div className="gradient-red-to-blue p-5 rounded-lg h-full w-full min-h-60 md:min-h-80">
        <h3 className="font-h5 md:font-h4 lg:font-h3 text-black font-medium uppercase h-full">
          Хотите узнать больше, рассчитать стоимость или забрать устройство на
          бесплатный тест?
        </h3>
      </div>
      <div className="col-span-1 xl:col-span-2 relative aspect-video w-full rounded-lg gradient-blue border border-blue p-5 h-fit">
        <ContactsForm />
      </div>
    </section>
  )
}
