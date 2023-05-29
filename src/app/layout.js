import Link from 'next/link'
import './globals.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Gardenify',
  description: 'Bringing life to your living space',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout