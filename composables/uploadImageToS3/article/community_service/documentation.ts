import { getFile } from '~/composables/s3/getFile'
import { uploadFile } from '../../../s3/uploadFile'

const uploadCommunityServiceDocumentationArticleImage = async ({ file, articleName, imageName }: { file: File, articleName: string, imageName: string }) => {
  const ext = file?.type.split("/")[1]
  const judulImage = imageName.replaceAll(" ", "-")
  const judulArticle = articleName.replaceAll(" ", "-")
  const fileName = `article/community-service/${judulArticle}/documentation/${judulImage}.${ext}`
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

export { uploadCommunityServiceDocumentationArticleImage }