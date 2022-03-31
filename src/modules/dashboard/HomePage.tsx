import MainScreen from "modules/layouts/MainScreen"
import type { NextPage } from "next"
import * as React from "react"

interface HomePageProps {}

const HomePage: NextPage<HomePageProps> = () => {
  return (
    <div className="home">
      <MainScreen path="dashboard">
        <div>sssssssssss</div>
      </MainScreen>
    </div>
  )
}

export default HomePage
