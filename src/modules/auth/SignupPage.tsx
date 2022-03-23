import type { NextPage } from "next"
import Link from "next/link"
import * as React from "react"
import Button from "ui/Button"
import FormItem from "ui/FormItem"

interface SignupPageProps {}

const SignupPage: NextPage<SignupPageProps> = ({}) => {
  function handleSubmit(event: any) {
    event.preventDefault()
    // event.target.email.value
  }

  return (
    <div className="signup">
      <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
        <div className="max-w-md mx-auto text-center font-semibold text-2xl">
          <h1 className="text-grey-800 mb-4">Create an account</h1>
          <p className="font-medium text-grey-700 text-sm mb-4">Create a free account and start using Fashy Store.</p>

          <form onSubmit={handleSubmit}>
            <div className="flex gap-2">
              <FormItem label="First Name" name="firstname" placeholder="Your First Name" required />
              <FormItem label="Last Name" name="lastname" placeholder="Your Last Name" required />
            </div>
            <FormItem label="Email Address" name="email" placeholder="john@example.com" type="email" required />
            <FormItem label="Phone Number" name="phone" placeholder="Phone Number" type="tel" required />
            <FormItem label="Password" name="password" placeholder="********" type="password" required />

            <Button label="Sign In" full={true} type="submit" loading={false} />
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
    </div>
  )
}

export default SignupPage
