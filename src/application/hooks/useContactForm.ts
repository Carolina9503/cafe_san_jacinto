import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import type { ContactMessage } from '@/domain/entities/ContactMessage'
import { buildContactMessage } from '@/shared/utils/buildContactMessage'
import { buildWhatsAppLink } from '@/shared/constants/contact'

const contactSchema = z.object({
  name: z.string().trim().min(2, 'Cuéntanos tu nombre'),
  email: z.string().trim().email('Ingresa un correo válido'),
  message: z.string().trim().min(10, 'Tu mensaje debe tener al menos 10 caracteres'),
})

export function useContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactMessage>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = handleSubmit(async (data) => {
    window.open(buildWhatsAppLink(buildContactMessage(data)), '_blank', 'noopener,noreferrer')
    setIsSubmitted(true)
    reset()
  })

  return { register, onSubmit, errors, isSubmitting, isSubmitted }
}
