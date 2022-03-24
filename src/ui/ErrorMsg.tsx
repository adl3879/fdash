import * as React from "react"

interface ErrorMsgProps {
  content: string | undefined
}

const ErrorMsg: React.FC<ErrorMsgProps> = ({ content }) => {
  return (
    <div
      className={`w-full p-2 mb-3 text-center border border-error-tertiary bg-error-primary text-error-secondary 
      text-sm rounded font-medium`}
      style={{ width: 360 }}
    >
      {content}
    </div>
  )
}

export default ErrorMsg
