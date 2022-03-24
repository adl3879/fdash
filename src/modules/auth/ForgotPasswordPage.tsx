import { Logo } from "icons/Logo"
import PasswordSent from "icons/PasswordSent"
import type { NextPage } from "next"
import Link from "next/link"
import * as React from "react"
import Button from "ui/Button"
import FormItem from "ui/FormItem"
import Modal from "ui/Modal"

interface ForgotPasswordPageProps {}

const ForgotPasswordPage: NextPage<ForgotPasswordPageProps> = ({}) => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false)

  function handleSubmit(event: any) {
    event.preventDefault()
    setIsModalOpen(true)
    // event.target.email.value
  }

  function handleModalClose() {
    setIsModalOpen(false)
  }

  return (
    <div className="login">
      <Logo className="flex justify-center mt-6" />

      <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
        <div className="max-w-md mx-auto text-center font-semibold text-2xl">
          <h1 className="text-grey-800 mb-4">Forgot Password</h1>
          <p className="font-medium text-grey-700 text-sm mb-4" style={{ width: 360 }}>
            Enter your email address and we'll send you an email with instructions to reset your password.
          </p>

          <form onSubmit={handleSubmit}>
            <FormItem label="Email Address" name="email" placeholder="john@example.com" type="email" required />

            <Button label="Send Password Reset Link" full={true} type="submit" loading={false} />
          </form>

          <div className="mt-3">
            <small className="block text-xs mt-3">
              Remember your password?{" "}
              <Link href={"/login"}>
                <span className="text-primary cursor-pointer">Login</span>
              </Link>
            </small>
          </div>
        </div>
      </div>

      <Modal title="Password Reset" isOpen={isModalOpen} onClose={handleModalClose}>
        <PasswordSent className="flex justify-center" />
        <h2 className="text-grey-800 mb-2 text-center font-semibold">Password reset link sent</h2>
        <p className="font-medium text-grey-700 text-sm mb-4 text-center">
          We have sent you an email containing a link to reset your password, kindly check your email to set a new
          password.
        </p>
      </Modal>
    </div>
  )
}

export default ForgotPasswordPage
