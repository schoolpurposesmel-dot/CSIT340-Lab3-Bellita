import SectionHeading from './SectionHeading'
import ContactLink from './ContactLink'

function ContactSection() {
  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <SectionHeading
        title="Contact"
        subtitle="Say hi."
      />

      <ul className="mt-8 space-y-3">
        <ContactLink
          label="Email"
          href="mailto:schoolpurposesmel@gmail.com"
          text="schoolpurposesmel@gmail.com"
        />

        <ContactLink
          label="GitHub"
          href="https://github.com/schoolpurposesmel-dot"
          text="github.com/schoolpurposesmel"
        />

        <ContactLink
          label="LinkedIn"
          href="https://linkedin.com/in/maraiah-carmel-bellita"
          text="linkedin.com/in/Maraiah-Carmel-Bellita"
        />
      </ul>
    </section>
  )
}

export default ContactSection