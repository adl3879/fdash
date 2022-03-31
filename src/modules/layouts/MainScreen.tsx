import { Bell } from "icons/Bell"
import { DropDown } from "icons/DropDown"
import type { NextPage } from "next/types"
import * as React from "react"
import Sidebar from "ui/Sidebar"

interface MainScreenProps {
  secondNav?: React.ReactNode
  path?: string
}

const MainScreen: NextPage<MainScreenProps> = ({ children, path }) => {
  return (
    <div className="major-screen">
      <div className="bg-primary h-full fixed top-0 left-0 right-0 bottom-0 overflow-auto w-52">
        <Sidebar />
      </div>
      <div className="relative left-52 min-h-screen" style={{ width: "calc(100% - 208px)" }}>
        <div className="py-2 px-6 flex justify-between items-center border-b border-grey-300">
          <h2 className="capitalize font-semibold text-grey-700 text-lg">{path}</h2>

          <div className="flex items-center gap-2">
            <Bell className="mr-2" />
            <h3 className="font-semibold">Emily Rosher</h3>
            <img
              className="inline object-cover w-8 h-8 rounded-full"
              src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="--- image"
            />
            <DropDown className="py-2" />
          </div>
        </div>
        <div className="">s</div>
        <div className="bg-error-tertiary">{children}</div>
      </div>
    </div>
  )
}

export default MainScreen
