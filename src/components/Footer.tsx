import Link from "next/link"
import Image from "next/image"
import { links } from "@/data"

const Footer = () => {
 return (
  <footer className="footer footer-center p-10 bg-gray-950 text-base-content rounded">
   <Link href={"/"}>
    <Image src="/images/logo.png" alt="Thomas Jefferson Recites" width={150} height={150} />
   </Link>
   <ul className="grid grid-flow-col gap-4">
    {links.map((item, i) => (
     <li key={i}>
      <Link href={item.href} className="link link-hover text-white">{item.label}</Link>
     </li>
    ))}
   </ul>
   <div>
    <p className="text-slate-200">Copyright © 2024 - Jeffrey Claybrook</p>
   </div>
  </footer>
 )
}

export default Footer