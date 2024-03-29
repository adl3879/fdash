import * as React from "react"
import { Logo } from "icons/Logo"
import PasswordSent from "icons/PasswordSent"
import type { NextPage } from "next"
import Link from "next/link"
import Button from "ui/Button"
import FormItem from "ui/FormItem"
import Modal from "ui/Modal"
import { trpc } from "utils/trpc"
import ErrorMsg from "ui/ErrorMsg"

interface SignupPageProps {}

const SignupPage: NextPage<SignupPageProps> = ({}) => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false)
  const [email, setEmail] = React.useState<string>("")
  const userMutation = trpc.useMutation(["user.signUp"])
  const verifyEmailMutation = trpc.useMutation(["user.sendVerificationEmail"])

  function handleSubmit(event: any) {
    event.preventDefault()
    setEmail(event.target.email.value)

    userMutation.mutate(
      {
        email: event.target.email.value,
        password: event.target.password.value,
        firstName: event.target.firstname.value,
        lastName: event.target.lastname.value,
        phone: event.target.phone.value,
      },
      {
        onSuccess(data) {
          sendVerificationEmail()
          if (typeof window === "undefined") {
            localStorage.setItem("token", data.token)
          }
        },
      }
    )
  }

  function sendVerificationEmail() {
    verifyEmailMutation.mutate(email, {
      onSuccess() {
        setIsModalOpen(true)
      },
    })
  }

  return (
    <div className="signup">
      <Logo className="flex justify-center mt-6" fill="#4D65F1" />

      <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
        <div className="max-w-md mx-auto text-center font-semibold text-2xl">
          <h1 className="text-grey-800 mb-4">Create an account</h1>
          <p className="font-medium text-grey-700 text-sm mb-4">Create a free account and start using Fashy Store.</p>

          {userMutation.isError && <ErrorMsg content={userMutation.error?.message} />}

          <form onSubmit={handleSubmit}>
            <FormItem label="First Name" name="firstname" placeholder="Your First Name" required />
            <FormItem label="Last Name" name="lastname" placeholder="Your Last Name" required />
            <FormItem label="Email Address" name="email" placeholder="john@example.com" type="email" required />
            <FormItem label="Phone Number" name="phone" placeholder="Phone Number" type="tel" required />
            <FormItem label="Password" name="password" placeholder="********" type="password" required />

            <Button label="Sign In" full={true} type="submit" loading={userMutation.isLoading} />
          </form>

          <div className="mt-3">
            <small className="block text-xs mt-3">
              Already have an account?{" "}
              <Link href={"/login"}>
                <span className="text-primary cursor-pointer">Login</span>
              </Link>
            </small>
          </div>
        </div>
      </div>

      <Modal title="Email Verification" isOpen={isModalOpen}>
        <PasswordSent className="flex justify-center" />
        <h2 className="text-grey-800 mb-2 text-center font-semibold">Email verification link sent</h2>
        <p className="font-medium text-grey-700 text-sm mb-4 text-center">
          We have sent you an email containing a link to verify your email, kindly check your email to set a new verify
          your email address.
          <br />
          <br />
          Didn't get an email?{" "}
          <div onClick={sendVerificationEmail} className="cursor-pointer">
            <span className="text-primary cursor-pointer">Resend Verification Email</span>
          </div>
        </p>
      </Modal>
    </div>
  )
}

export default SignupPage
