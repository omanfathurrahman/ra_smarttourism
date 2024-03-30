import type { Member } from "~/types/Member"

export default async (data: Member[]) => {
  data.every(async member => {
    const res = await $fetch('/api/members', {
      method: 'POST',
      body: JSON.stringify(member)
    })
  })
}
