import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import styles from "../app/global.module.css"
import {Footer, Header} from "@/components/index"
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Instant Shine | Car detailing',
  description: 'Car care | car detailing | auto interior detailing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + ` ${styles.page}`}>
      <Header />
        {children}
      <Footer/>
      </body>
    </html>
  )
}
