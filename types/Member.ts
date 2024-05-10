import type { Member } from "@prisma/client";

export type MemberToBeDisplayed = Omit<Member, 'id'>
