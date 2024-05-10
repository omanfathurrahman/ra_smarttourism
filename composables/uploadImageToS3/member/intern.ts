import { getFile } from '~/composables/s3/getFile'
import { uploadFile } from '../../s3/uploadFile'

const uploadInternProfilePicture = async ({ file, name }: { file: File, name: string }) => {
  const ext = file?.type.split("/")[1]
  const judul = name.replaceAll(" ", "-")
  const fileName = `member/intern/${judul}.${ext}`
  const imageFileToUpload = await fileToBlob(file)
  try {
    await uploadFile({
      file: imageFileToUpload,
      key: fileName
    })
  } catch (error) {
    console.log(error)
  }

  const url =  await getFile(fileName)

  return {
    img_path: fileName,
    img_url: url.img_url,
    img_url_expired_time: url.img_url_expired_time
  }
}

export { uploadInternProfilePicture }