import { create } from 'zustand'
import { type User, type UserState } from '../model/user'

const useUserStore = create<UserState>((set) => ({
  user: {
    id: '',
    username: '',
    email: '',
    isManager: false
  },
  userToken: '',
  setUser: (user: User) => { set({ user }) },
  setUserToken: (userToken: string) => { set({ userToken }) }
}))

export default useUserStore
