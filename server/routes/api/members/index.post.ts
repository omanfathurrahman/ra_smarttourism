import { prisma } from "~/prisma/db"
import { Member } from "~/types/Member"

export default defineEventHandler(async (event) => {
  const { name, email, img_url, position, end_date, start_date, part, show } = await readBody<Member>(event)
  const res = await prisma.member.create({
    data: {
      img_url: img_url,
      name: name,
      email: email,
      position: position,
      end_date:  (new Date(end_date)).toISOString(),
      start_date: (new Date(start_date)).toISOString(),
      part: part,
      show: show || true
    }
  })
  return {
    status: 200,
    body: res
  }
})
