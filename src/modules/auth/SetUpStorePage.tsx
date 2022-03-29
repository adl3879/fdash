import * as React from "react"
import type { NextPage } from "next"
import FormItem from "ui/FormItem"
import Button from "ui/Button"
import { Logo } from "icons/Logo"
import { useRouter } from "next/router"
import { trpc } from "utils/trpc"
import ErrorMsg from "ui/ErrorMsg"

interface SetUpStorePageProps {}

const SetUpStorePage: NextPage<SetUpStorePageProps> = () => {
  const router = useRouter()
  const userQuery = trpc.useQuery(["user.getUserById", Number(router.asPath.split("/")[2])])
  const storeMutation = trpc.useMutation(["store.createStore"])
  const [imageBuffer, setImageBuffer] = React.useState<string | ArrayBuffer | null>()

  function handleSubmit(event: any) {
    event.preventDefault()
    storeMutation.mutate({
      name: event.target.name.value,
      description: event.target.description.value,
      domain: event.target.domain.value,
      logo: String(imageBuffer),
    })
  }

  function handleImageUpload(event: any) {
    const reader = new FileReader()
    reader.readAsDataURL(event.target.files[0])
    reader.onloadend = () => {
      setImageBuffer(reader.result)
    }
    reader.onerror = () => {
      console.log("error")
    }
  }

  return (
    <div className="signup">
      <Logo className="flex justify-center mt-6" />

      <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
        <div className="max-w-md mx-auto text-center font-semibold text-2xl">
          <h1 className="text-grey-800 mb-4" style={{ width: 360 }}>
            Welcome <span className="capitalize text-primary">{userQuery.data?.user.firstName}</span>, setup your store.
          </h1>
          <p className="font-medium text-grey-700 text-sm mb-4">Complete the form below to setup your store.</p>

          {storeMutation.isError && <ErrorMsg content={storeMutation.error?.message} />}

          <form onSubmit={handleSubmit}>
            <div className="mb-4 flex flex-col">
              <label className="font-primary font-medium text-grey-800 text-sm mb-1 text-left" htmlFor="description">
                Logo
              </label>
              <input
                onChange={handleImageUpload}
                accept=".jpg, .png, .jpeg"
                className="fileInput font-primary font-medium text-sm px-6 py-2 bg-transparent border border-grey-500 outline-none rounded-md"
                type="file"
              />
            </div>
            <FormItem label="Name" name="name" placeholder="Name" required />
            <div className="mb-4 flex flex-col">
              <label className="font-primary font-medium text-grey-800 text-sm mb-1 text-left" htmlFor="description">
                Description
              </label>
              <textarea
                className="font-primary font-medium text-sm px-6 py-2 bg-transparent border border-grey-500 outline-none rounded-md"
                placeholder="Description"
                name="description"
                id="description"
              />
            </div>
            <FormItem label="Domain" name="domain" placeholder=".fashy.shop" type="text" required />

            <Button label="Proceed" full={true} type="submit" loading={storeMutation.isLoading} />
          </form>
        </div>
      </div>
    </div>
  )
}

export default SetUpStorePage
