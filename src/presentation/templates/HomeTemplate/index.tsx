import { Navbar } from '@/presentation/organisms/Navbar'
import { Hero } from '@/presentation/organisms/Hero'
import { HistoriaSection } from '@/presentation/organisms/HistoriaSection'
import { NuestroCafeSection } from '@/presentation/organisms/NuestroCafeSection'
import { BeneficiosSection } from '@/presentation/organisms/BeneficiosSection'
import { ProductosSection } from '@/presentation/organisms/ProductosSection'
import { DistribucionSection } from '@/presentation/organisms/DistribucionSection'
import { TestimoniosSection } from '@/presentation/organisms/TestimoniosSection'
import { ContactForm } from '@/presentation/organisms/ContactForm'
import { Footer } from '@/presentation/organisms/Footer'
import { CartDrawer } from '@/presentation/organisms/CartDrawer'
import { WhatsAppFloatingButton } from '@/presentation/molecules/WhatsAppFloatingButton'

export function HomeTemplate() {
  return (
    <div className="min-h-screen bg-beige">
      <Navbar />
      <main>
        <Hero />
        <HistoriaSection />
        <NuestroCafeSection />
        <BeneficiosSection />
        <ProductosSection />
        <DistribucionSection />
        <TestimoniosSection />
        <ContactForm />
      </main>
      <Footer />
      <CartDrawer />
      <WhatsAppFloatingButton />
    </div>
  )
}
