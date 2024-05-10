import { getFile } from '../s3/getFile'

const getImage = async ({ key }: { key: string }) => {
  const imgUrl = await getFile(key)
  return imgUrl
}

export { getImage }