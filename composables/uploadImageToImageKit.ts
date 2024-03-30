import type { ImageUploaded } from "~/types/ImageUploaded";
import { v4 as uuidv4 } from 'uuid'
import ImageKit from "imagekit-javascript";

var imagekit = new ImageKit({
  publicKey: "public_8U1XREZCeNuJb/JSZ1Ndu4Mf/9k=",
  urlEndpoint: "https://ik.imagekit.io/omanfathurrahmannur/magang-ra",
});

export default async ({ uploadedPosterImg, title }: { uploadedPosterImg: File, title: string }): Promise<string> => {
  const currentTimeInSeconds = Math.floor(Date.now() / 1000);
  const expiryTimeInSeconds = currentTimeInSeconds + 3500;
  const ext = uploadedPosterImg?.type.split("/")[1]
  const file = uploadedPosterImg
  const judul = `${title}`.replaceAll(" ", "-")
  const token = uuidv4()
  const signature = await createSignature({
    expire: expiryTimeInSeconds,
    token: token,
  })

  const response = await imagekit.upload({
    file: await fileToBlob(file!),
    fileName: `${judul}.${ext}`,
    signature: signature,
    expire: expiryTimeInSeconds,
    tags: ['article', 'poster'],
    folder: '/',
    token: token,
    useUniqueFileName: false,
    overwriteFile: true,
  })

  return response.url
}
