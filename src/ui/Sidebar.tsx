import * as React from "react"
import { Logo } from "icons/Logo"
import Link from "next/link"
import { Home } from "icons/Home"
import { Products } from "icons/Products"
import { Settings } from "icons/Settings"

interface SidebarProps {}
interface SidebarNavItemsProps {
  href?: string
  label?: string
  icon?: React.ReactNode
}

const Links = [
  ["Dashboard", "/", <Home />],
  ["Products", "/products", <Products />],
  ["Settings", "/settings", <Settings />],
]

const SidebarNavItems: React.FC<SidebarNavItemsProps> = ({ href, label, icon }) => (
  <a className="flex items-center gap-2 text-white my-5 focus:bg-grey-100" href={href}>
    {icon}
    {label}
  </a>
)

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <div className="px-5 py-10">
      <Logo fill="#ffff" />

      <nav className="flex flex-col mt-10">
        {Links.map((item) => (
          <SidebarNavItems href={String(item[1])} label={String(item[0])} icon={item[2]} />
        ))}
      </nav>
    </div>
  )
}

export default Sidebar
