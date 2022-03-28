import { Logo } from "icons/Logo"
import type { NextPage } from "next"
import Link from "next/link"
import { useRouter } from "next/router"
import * as React from "react"
import Button from "ui/Button"
import ErrorMsg from "ui/ErrorMsg"
import FormItem from "ui/FormItem"
import { trpc } from "utils/trpc"

interface LoginPageProps {}

const LoginPage: NextPage<LoginPageProps> = ({}) => {
  const userMutation = trpc.useMutation(["user.login"])
  const router = useRouter()

  function handleSubmit(event: any) {
    event.preventDefault()
    // event.target.email.value
    userMutation.mutate(
      {
        email: event.target.email.value,
        password: event.target.password.value,
      },
      {
        onSuccess(data) {
          if (typeof window !== "undefined") {
            localStorage.setItem("token", data.token)
          }
          router.push("/") // redirect to home if successful
        },
      }
    )
  }

  return (
    <div className="login">
      <Logo className="flex justify-center mt-6" />

      <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
        <div className="max-w-md mx-auto text-center font-semibold text-2xl">
          <h1 className="text-grey-800 mb-4">Log in to your account</h1>
          <p className="font-medium text-grey-700 text-sm mb-4">Enter your email address and password to continue.</p>

          {userMutation.isError && <ErrorMsg content={userMutation.error.message} />}

          <form onSubmit={handleSubmit}>
            <FormItem label="Email Address" name="email" placeholder="john@example.com" type="email" required />
            <FormItem label="Password" name="password" placeholder="********" type="password" required />

            <Button label="Sign In" full={true} type="submit" loading={userMutation.isLoading} />
          </form>

          <div className="mt-3">
            <Link href={"/forgot-password"}>
              <small className="block text-xs text-primary cursor-pointer">Forgot your Password?</small>
            </Link>
            <small className="block text-xs mt-3">
              Don't have an account?{" "}
              <Link href={"/sign-up"}>
                <span className="text-primary cursor-pointer">Sign up</span>
              </Link>
            </small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
