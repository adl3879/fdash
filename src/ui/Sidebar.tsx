import * as React from "react"
import { Logo } from "icons/Logo"
import Link from "next/link"
import { Home } from "icons/Home"
import { Products } from "icons/Products"
import { Settings } from "icons/Settings"
import { useRouter } from "next/router"

interface SidebarProps {}
interface SidebarNavItemProps {
  href?: string
  label?: string
  icon?: React.ReactNode
  active?: boolean
}

const Links = [
  ["Dashboard", "/", <Home />],
  ["Products", "/products", <Products />],
  ["Settings", "/settings", <Settings />],
]

const SidebarNavItem: React.FC<SidebarNavItemProps> = ({ href, label, icon, active }) => (
  <Link href={String(href)}>
    <a
      className={`flex items-center gap-2 text-white my-4 py-2 px-3 rounded
      ${active && "bg-active-white"}`}
    >
      {icon}
      {label}
    </a>
  </Link>
)

const Sidebar: React.FC<SidebarProps> = () => {
  const router = useRouter()

  return (
    <div className="px-5 py-10">
      <Logo fill="#ffff" className="px-3" />

      <nav className="flex flex-col mt-10">
        {Links.map((item) => (
          <SidebarNavItem
            href={String(item[1])}
            label={String(item[0])}
            icon={item[2]}
            active={router.pathname === item[1]}
          />
        ))}
      </nav>
    </div>
  )
}

export default Sidebar
