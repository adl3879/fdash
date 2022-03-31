import type { NextPage } from "next/types"
import * as React from "react"
import Sidebar from "ui/Sidebar"

interface MainScreenProps {
  secondNav?: React.ReactNode
}

const MainScreen: NextPage<MainScreenProps> = ({ children }) => {
  return (
    <div className="major-screen">
      <div className="bg-primary h-full fixed top-0 left-0 right-0 bottom-0 overflow-auto w-52">
        <Sidebar />
      </div>
      <div className="relative left-52 min-h-screen" style={{ width: "calc(100% - 208px)" }}>
        <div className="bg-white">s</div>
        <div className="bg-grey-700">s</div>
        <div className="bg-error-tertiary">{children}</div>
      </div>
    </div>
  )
}

export default MainScreen
