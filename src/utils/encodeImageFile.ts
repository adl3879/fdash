export function encodeImageFile(file: Blob) {
  let buffer: string | ArrayBuffer | null = ""
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onloadend = () => {
    buffer = reader.result
  }
  console.log(reader.result)

  return buffer
}
