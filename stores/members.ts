import type { Member } from '@prisma/client'
import { defineStore } from 'pinia'
import { getFile } from '~/composables/s3/getFile'

export const useMyMembersStore = defineStore('useMyMembersStore', () => {
  const _members = ref<Member[]>([])

  const getMembers = computed(() => _members.value)

  const setMembers = (members: Member[]) => {
    _members.value = members
  }

  const getMembersFromLocalStorage = () => {
    const items = localStorage.getItem('members')
    if (items) {
      const _tempMembers = (JSON.parse(items) as Member[]).map((member) => {
        return {
          ...member,
          start_date: member.start_date ? new Date(member.start_date) : null,
          end_date: member.end_date ? new Date(member.end_date) : null,
          img_url_expired_time: new Date(member.img_url_expired_time!)
        }
      })
      _members.value = _tempMembers
    } else {
      _members.value = []
    }
  }

  const getMembersFromDatabase = async () => {
    const res = await $fetch('/api/members')
    const _tempMembers = res.map((member) => {
      return {
        ...member,
        start_date: member.start_date ? new Date(member.start_date) : null,
        end_date: member.end_date ? new Date(member.end_date) : null,
        img_url_expired_time: new Date(member.img_url_expired_time!)
      }
    })
    _members.value = _tempMembers
    persistMembersToLocalStorage()
  }

  const persistMembersToLocalStorage = () => {
    localStorage.setItem('members', JSON.stringify(_members.value))
  }
  const addMember = (member: Member | Member[]) => {
    if (Array.isArray(member)) {
      _members.value.push(...member)
      persistMembersToLocalStorage()
      return
    }
    _members.value.push(member)
    persistMembersToLocalStorage()
  }

  const updateExpiredMemberImgUrl = async (member: Member) => {
    const { img_url, img_url_expired_time } = await getFile(member.img_path!)
    console.log('tess')
    _members.value = _members.value.map((item) => {
      if (item.id === member.id) {
        return {
          ...item,
          img_url,
          img_url_expired_time,
        } satisfies Member
      }
      return item
    })
    
    persistMembersToLocalStorage()
  }

  return { getMembers, addMember, getMembersFromLocalStorage, getMembersFromDatabase, persistMembersToLocalStorage, updateExpiredMemberImgUrl }
})
