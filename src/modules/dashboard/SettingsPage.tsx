import MainScreen from "modules/layouts/MainScreen"
import type { NextPage } from "next"
import * as React from "react"

interface SettingsPageProps {}

const SettingsPage: NextPage<SettingsPageProps> = () => {
  return (
    <div className="">
      <MainScreen path="settings">
        <div>niggaz know</div>
      </MainScreen>
    </div>
  )
}

export default SettingsPage
