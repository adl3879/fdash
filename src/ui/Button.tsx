import * as React from "react"
import Spinner from "./animations/Spinner"

interface ButtonProps {
  label: string
  variant?: "primary" | "secondary" | "tertiary"
  className?: string
  loading: boolean
  full?: boolean
  type?: "button" | "submit" | "reset"
  onClick?: () => void
}

const Button = ({
  label,
  variant = "primary",
  className,
  onClick,
  type = "submit",
  full,
  loading,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`font-primary rounded-md w-full text-sm py-3 px-6 relative ${
        variant === "primary" && "text-white bg-primary"
      } outline-none text-center ${full && "w-full"} ${className}`}
      type={type}
      onClick={onClick}
      {...props}
    >
      {label}
      <Spinner loading={loading} />
    </button>
  )
}

export default Button
