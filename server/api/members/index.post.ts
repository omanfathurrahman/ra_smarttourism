import { Member } from "@prisma/client"
import { prisma } from "~/prisma/db"

export default defineEventHandler(async (event) => {
  const member = await readBody<Member>(event)
  const res = await prisma.member.create({
    data: {
      ...member,
      start_date: new Date(member.start_date!),
      end_date: new Date(member.end_date!),
    }
  })
})
