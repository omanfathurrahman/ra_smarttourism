export default async () => {
  const res = await $fetch('/api/members')
  return res
}
