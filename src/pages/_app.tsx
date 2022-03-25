import "../styles/globals.css"
import type { AppProps } from "next/app"
import { withTRPC } from "@trpc/next"
import { AppRouter } from "./api/trpc/[trpc]"
import Head from "next/head"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/fashy_logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#4E65F0" />

        {/* <!-- Primary Meta Tags --> */}
        <title>Dashboard | Fashy Store</title>
        <meta name="title" content="Dashboard | Fashy Store" />
        <meta
          name="description"
          content="Easily create an online store with all the tools you need to build, manage, and grow your fashion business."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dashboard.fashy.shop/" />
        <meta property="og:title" content="Dashboard | Fashy Store" />
        <meta
          property="og:description"
          content="Easily create an online store with all the tools you need to build, manage, and grow your fashion business."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/www-fashy-shop/image/upload/v1611139379/sgzhxmgo0m7dvs7ipbsd.png"
        />

        {/* <!-- Twitter --> */}
        <meta
          property="twitter:card"
          content="https://res.cloudinary.com/www-fashy-shop/image/upload/v1611139379/sgzhxmgo0m7dvs7ipbsd.png"
        />
        <meta property="twitter:url" content="https://dashboard.fashy.shop/" />
        <meta property="twitter:title" content="Dashboard | Fashy Store" />
        <meta
          property="twitter:description"
          content="Easily create an online store with all the tools you need to build, manage, and grow your fashion business."
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/www-fashy-shop/image/upload/v1611139379/sgzhxmgo0m7dvs7ipbsd.png"
        />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default withTRPC<AppRouter>({
  config({ ctx }) {
    const url = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}/api/trpc` : "http://localhost:3000/api/trpc"

    if (typeof window != "undefined") {
      ctx?.res?.setHeader("Authorization", "Bearer " + localStorage.getItem("token"))
    }

    return {
      url,
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    }
  },

  ssr: true,
})(MyApp)
