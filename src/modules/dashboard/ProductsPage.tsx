import MainScreen from "modules/layouts/MainScreen"
import type { NextPage } from "next"
import * as React from "react"

interface ProductsPageProps {}

const ProductsPage: NextPage<ProductsPageProps> = () => {
  return (
    <div className="">
      <MainScreen path="products">
        <div>streets ain't safe</div>
      </MainScreen>
    </div>
  )
}

export default ProductsPage
