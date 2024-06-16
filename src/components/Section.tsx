import { ReactNode } from "react"

type SectionProps = {
 children: ReactNode
}

const Section = ({ children }: SectionProps) => {
 return (
  <section className="max-w-3xl mx-auto my-16">{children}</section>
 )
}

export default Section