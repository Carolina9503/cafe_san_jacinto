import { CartProvider } from '@/application/context/CartContext'
import { AppRouter } from '@/app/router'

function App() {
  return (
    <CartProvider>
      <AppRouter />
    </CartProvider>
  )
}

export default App
