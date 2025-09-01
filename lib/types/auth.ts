export interface LoginRequest {
  email: string
  password: string
}

export interface SignupRequest {
  email: string
  password: string
  username: string
}

export interface AuthResponse {
  user: User
  token: string
}
