import './globals.css'
import { karla } from './fonts'

export const metadata = {
  title: 'Gigi Lapachishvili',
  description: 'Elegant Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={karla.className}>{children}</body>
    </html>
  )
}
