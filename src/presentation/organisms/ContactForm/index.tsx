import { CheckCircle2, Mail, MapPin, Phone, Send } from 'lucide-react'
import { useContactForm } from '@/application/hooks/useContactForm'
import { Container } from '@/presentation/atoms/Container'
import { Button } from '@/presentation/atoms/Button'
import { Input } from '@/presentation/atoms/Input'
import { Textarea } from '@/presentation/atoms/Textarea'
import { Text } from '@/presentation/atoms/Text'
import { SectionHeading } from '@/presentation/molecules/SectionHeading'
import { FormField } from '@/presentation/molecules/FormField'
import { buildWhatsAppLink } from '@/shared/constants/contact'

const contactDetails = [
  { icon: MapPin, text: 'Carcasí, Santander, Colombia' },
  { icon: Phone, text: '+57 310 204 9535', href: buildWhatsAppLink() },
  { icon: Mail, text: 'hola@cafesanjacinto.co', href: 'mailto:hola@cafesanjacinto.co' },
]

export function ContactForm() {
  const { register, onSubmit, errors, isSubmitting, isSubmitted } = useContactForm()

  return (
    <section id="contacto" className="bg-coffee-50 py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Contacto"
          title="Hablemos de café"
          description="¿Tienes preguntas sobre nuestros lotes, distribución o quieres visitar la finca? Escríbenos."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <ul className="flex flex-col gap-6">
              {contactDetails.map(({ icon: Icon, text, href }) => (
                <li key={text} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-coffee-700/8 text-coffee-700">
                    <Icon size={18} strokeWidth={1.5} />
                  </span>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noreferrer' : undefined}
                      className="pt-2.5 text-ink-secondary transition-colors hover:text-coffee-700"
                    >
                      {text}
                    </a>
                  ) : (
                    <Text variant="secondary" className="pt-2.5">
                      {text}
                    </Text>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-organic-200 bg-organic-50 px-8 py-16 text-center">
                <CheckCircle2 size={40} strokeWidth={1.25} className="text-organic-500" />
                <Text variant="body" className="text-organic-700">
                  ¡Gracias por escribirnos! Te responderemos muy pronto.
                </Text>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="flex flex-col gap-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <FormField label="Nombre" htmlFor="name" error={errors.name?.message}>
                    <Input id="name" placeholder="Tu nombre" hasError={!!errors.name} {...register('name')} />
                  </FormField>
                  <FormField label="Correo electrónico" htmlFor="email" error={errors.email?.message}>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@correo.com"
                      hasError={!!errors.email}
                      {...register('email')}
                    />
                  </FormField>
                </div>

                <FormField label="Mensaje" htmlFor="message" error={errors.message?.message}>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Cuéntanos en qué podemos ayudarte"
                    hasError={!!errors.message}
                    {...register('message')}
                  />
                </FormField>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  icon={<Send size={18} strokeWidth={1.75} />}
                  className="self-start"
                >
                  {isSubmitting ? 'Enviando…' : 'Enviar mensaje'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
