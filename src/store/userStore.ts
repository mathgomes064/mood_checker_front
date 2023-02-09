import { create } from 'zustand'

interface User {
  username: string
  email: string
  isManager: boolean
}

const useUserStore = create((set) => ({
  user: {},
  userToken: '',
  setUser: (user: User) => { set({ user }) },
  setUserToken: (userToken: string) => { set({ userToken }) }
}))

export default useUserStore
