import { s3Client } from './s3client'
import { Upload } from '@aws-sdk/lib-storage'
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { getFile } from './getFile';

export const uploadFile = async ({ file, key }: { file: Blob, key: string }) => {
  const runtimeConfig = useRuntimeConfig()

  const params = {
    Bucket: runtimeConfig.public.AWS_BUCKET,
    Key: key,
    Body: file,
  }
  try {
    const uploadS3 = new Upload({
      client: s3Client().s3Client,
      params: params,
    })
    uploadS3.on("httpUploadProgress", (progress) => {
      console.log(progress);
    });
    await uploadS3.done();
  } catch (error) {
    console.log(error)
    return
  }
}
