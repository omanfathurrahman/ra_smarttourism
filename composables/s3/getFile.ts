import { GetObjectCommand } from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"
import { s3Client } from "./s3client"

export const getFile = async (key: string): Promise<{ img_url: string, img_url_expired_time: Date }> => {
  const runtimeConfig = useRuntimeConfig()
  const input = {
    Bucket: runtimeConfig.public.AWS_BUCKET,
    Key: key
  }
  const command = new GetObjectCommand(input)
  const url = await getSignedUrl(s3Client().s3Client, command, { expiresIn: 60 * 60 * 24 * 5 })
  
  const expirationDate = new Date(Date.now() + (5 * 24 * 60 * 60 * 1000)); // Add 5 days in milliseconds

  return { 
    img_url: url,
    img_url_expired_time: expirationDate
  }
}