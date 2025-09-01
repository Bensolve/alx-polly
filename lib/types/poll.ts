export interface Poll {
  id: string
  question: string
  description?: string
  creatorId: string
  creator: User
  options: PollOption[]
  totalVotes: number
  createdAt: Date
  updatedAt: Date
  isActive: boolean
  expiresAt?: Date
}

export interface PollOption {
  id: string
  text: string
  votes: number
  percentage: number
}

export interface CreatePollRequest {
  question: string
  description?: string
  options: string[]
  expiresAt?: Date
}

export interface VoteRequest {
  pollId: string
  optionId: string
}
