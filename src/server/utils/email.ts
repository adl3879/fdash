import nodemailer from "nodemailer"

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "129591f23362c5",
    pass: "0039b9167b64c8",
  },
})

interface Options {
  to: string
  from: string
  subject: string
  text: string
}

export function sendMail(options: Options): boolean {
  const mailOptions = {
    to: options.to,
    from: options.from,
    subject: options.subject,
    text: options.text,
  }

  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error)
      transport.close()
      return false
    }
  })

  return true
}
