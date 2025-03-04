export interface User {
  email: string
  password: string
  token?: string
}

export interface Token {
  accessToken: string
  grantType: string
}
