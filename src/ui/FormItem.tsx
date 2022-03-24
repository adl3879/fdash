import * as React from "react"

export interface FormItemProps {
  label: string
  name: string
  placeholder?: string
  required?: boolean
  type?: string
}

const FormItem: React.FC<FormItemProps> = ({ label, name, placeholder, required = false, type = "text", ...props }) => {
  return (
    <div className="mb-4 flex flex-col">
      <label htmlFor={name} className="font-primary font-medium text-grey-800 text-sm mb-1 text-left">
        {label}
      </label>
      <input
        className={`font-primary font-medium text-sm px-6 py-2 bg-transparent border border-grey-500 outline-none rounded-md 
        focus:border-primary`}
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
        {...props}
      />
    </div>
  )
}

export default FormItem
