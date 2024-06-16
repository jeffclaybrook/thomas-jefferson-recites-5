import { FC } from "react"
import Link from "next/link"

const NavbarItem: FC<{
 label: string
 href: string
 active: boolean
}> = ({
 label,
 href,
 active
}) => {
 return (
  <>
   {active ? (
    <Link
     href={href}
     className="text-lg text-amber-400 focus:text-amber-400"
    >
     {label}
    </Link>
   ) : (
    <Link
     href={href}
     className="text-lg text-slate-50 hover:text-amber-400"
    >
     {label}
    </Link>
   )}
  </>
 )
}

export default NavbarItem