export default async ({expire, token}: {expire: number, token: string}) => {
  return await $fetch('/api/generate-signature', {
    method: 'POST',
    body: JSON.stringify({
      expire: expire,
      token: token,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
