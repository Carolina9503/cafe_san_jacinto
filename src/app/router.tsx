import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from '@/presentation/pages/HomePage'

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}
