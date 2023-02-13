export interface User {
  id: string
  username: string
  email: string
  isManager: boolean
}

export interface UserState {
  user: User
  userToken: string
  setUser: (user: User) => void
  setUserToken: (userToken: string) => void
}
