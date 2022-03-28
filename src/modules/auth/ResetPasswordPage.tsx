import * as React from "react"
import { Logo } from "icons/Logo"
import type { NextPage } from "next"
import Link from "next/link"
import Button from "ui/Button"
import FormItem from "ui/FormItem"
import { trpc } from "utils/trpc"
import { useRouter } from "next/router"
import Modal from "ui/Modal"
import ErrorMsg from "ui/ErrorMsg"
import { ResetPassword } from "icons/ResetPassword"

interface ResetPasswordPageProps {}

const ResetPasswordPage: NextPage<ResetPasswordPageProps> = ({}) => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false)
  const router = useRouter()
  const resetPasswordMutation = trpc.useMutation(["user.validatePasswordReset"])

  function handleSubmit(event: any) {
    event.preventDefault()

    resetPasswordMutation.mutate(
      {
        token: String(router.asPath.split("/")[2]),
        newPassword: event.target.password.value,
        confirmPassword: event.target.cpassword.value,
      },
      {
        onSuccess() {
          setIsModalOpen(true)
        },
      }
    )
  }

  return (
    <div className="login">
      <Logo className="flex justify-center mt-6" />

      <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
        <div className="max-w-md mx-auto text-center font-semibold text-2xl">
          <h1 className="text-grey-800 mb-4">Reset Password</h1>
          <p className="font-medium text-grey-700 text-sm mb-4" style={{ width: 360 }}>
            Enter your new password below and must be at least 8 characters long.
          </p>

          {resetPasswordMutation.isError && <ErrorMsg content={resetPasswordMutation.error.message} />}

          <form onSubmit={handleSubmit}>
            <FormItem label="Enter New Password" name="password" placeholder="********" type="password" required />
            <FormItem label="Confirm New Password" name="cpassword" placeholder="********" type="password" required />

            <Button label="Reset Password" full={true} type="submit" loading={resetPasswordMutation.isLoading} />
          </form>
        </div>
      </div>

      <Modal title="Success" isOpen={isModalOpen}>
        <ResetPassword className="flex justify-center" />
        <h2 className="text-grey-800 mb-2 text-center font-semibold">Password reset successful</h2>
        <p className="font-medium text-grey-700 text-sm mb-4 text-center">
          You have successfully reset your password, you can now{" "}
          <Link href={"/login"}>
            <span className="text-primary cursor-pointer">Login </span>
          </Link>
          with your new password.
        </p>
      </Modal>
    </div>
  )
}

export default ResetPasswordPage
