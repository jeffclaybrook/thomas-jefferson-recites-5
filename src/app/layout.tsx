import type { Metadata } from "next"
import { Roboto_Slab } from "next/font/google"
import { ReactNode } from "react"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import "./globals.css"

const roboto = Roboto_Slab({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Thomas Jefferson Recites",
  description: "Craig Claybrook presents the Declaration of Independence as Thomas Jefferson"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}