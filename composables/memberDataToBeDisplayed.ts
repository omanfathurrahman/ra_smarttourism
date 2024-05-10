import type { $Enums } from "@prisma/client";

export default async () => {
  const members: {
    id: string;
    email: string;
    name: string;
    img_url: string;
    show: boolean;
    start_date: Date | null;
    end_date: Date | null;
    position: string;
    part: $Enums.Part;
}[] = []
  const res = await $fetch('/api/members')
  res.forEach(async (memberRes)=>{
    const memberToPush: {
      id: string;
      email: string;
      name: string;
      img_url: string;
      show: boolean;
      start_date: Date | null;
      end_date: Date | null;
      position: string;
      part: $Enums.Part;
  } = {
      ...memberRes,
      start_date: memberRes.start_date ? new Date(memberRes.start_date) : null,
      end_date: memberRes.end_date ? new Date(memberRes.end_date) : null,
      img_url: await getImage({key: memberRes.img_url})
    }
    members.push(memberToPush)
  })
  return members
}
