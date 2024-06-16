import { ReactNode } from "react"

type HeaderProps = {
 children: ReactNode
}

const Header = ({ children }: HeaderProps) => {
 return (
  <header className="hero min-h-screen bg-right" style={{ backgroundImage: "url(/images/hero.webp)" }}>
   <div className="hero-overlay bg-opacity-60" />
   <div className="p-4 max-w-7xl text-neutral-content">
    {children}
   </div>
  </header>
 )
}

export default Header