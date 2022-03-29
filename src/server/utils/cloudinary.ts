import cloudinary from "cloudinary"

export async function uploadImage(fileStr: string) {
  cloudinary.v2.config({
    cloud_name: String(process.env.CLOUDINARY_NAME),
    api_key: String(process.env.CLOUDINARY_API_KEY),
    api_secret: String(process.env.CLOUDINARY_API_SECRET),
  })

  const uploadResponse = await cloudinary.v2.uploader.upload(fileStr, {
    upload_preset: "fashy_re",
  })

  if (!uploadResponse) {
    throw new Error("Something went wrong!")
  }
  return uploadResponse.url
}
