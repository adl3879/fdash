import * as React from "react"
import { Logo } from "icons/Logo"
import type { NextPage } from "next"
import Link from "next/link"
import Button from "ui/Button"
import FormItem from "ui/FormItem"

interface ResetPasswordPageProps {}

const ResetPasswordPage: NextPage<ResetPasswordPageProps> = ({}) => {
  function handleSubmit(event: any) {
    event.preventDefault()
    // event.target.email.value
  }

  return (
    <div className="login">
      <Logo className="flex justify-center mt-6" />

      <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
        <div className="max-w-md mx-auto text-center font-semibold text-2xl">
          <h1 className="text-grey-800 mb-4">Forgot Password</h1>
          <p className="font-medium text-grey-700 text-sm mb-4" style={{ width: 360 }}>
            Enter your new password below and must be at least 8 characters long.
          </p>

          <form onSubmit={handleSubmit}>
            <FormItem label="Enter New Password" name="password" placeholder="********" type="password" required />
            <FormItem label="Confirm New Password" name="cpassword" placeholder="********" type="password" required />

            <Button label="Reset Password" full={true} type="submit" loading={false} />
          </form>
        </div>
      </div>
    </div>
  )
}

export default ResetPasswordPage
