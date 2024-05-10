import type { Member } from "@prisma/client"

export default async (data: Member[]) => {
  data.forEach(async member => {
    await $fetch('/api/members', {
      method: 'POST',
      body: JSON.stringify(member)
    })
  })
}
