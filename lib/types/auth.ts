import type { User, Session } from '@supabase/supabase-js'

export interface LoginRequest {
  email: string
  password: string
}

export interface SignupRequest {
  email: string
  password: string
  name: string
}

export interface AuthResponse {
  user: User
  session: Session
}

export interface AuthError {
  message: string
  status?: number
}
