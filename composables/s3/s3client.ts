import { S3Client, GetObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { Upload } from '@aws-sdk/lib-storage'
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3Client = () => {
  const runtimeConfig = useRuntimeConfig()
  const s3Client = new S3Client({
    region: 'ap-southeast-1',
    credentials: {
      accessKeyId: runtimeConfig.public.AWS_ACCESS_KEY_ID,
      secretAccessKey: runtimeConfig.public.AWS_SECRET_ACCESS_KEY
    },
  })
  return { s3Client }
}

export { s3Client }