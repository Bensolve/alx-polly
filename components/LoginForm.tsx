'use client'

interface LoginFormProps {
  onSubmit?: (email: string, password: string) => void
}

export default function LoginForm({ onSubmit }: LoginFormProps) {
  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input 
          type="email" 
          className="w-full px-3 py-2 border rounded-md"
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Password</label>
        <input 
          type="password" 
          className="w-full px-3 py-2 border rounded-md"
          placeholder="Enter your password"
        />
      </div>
      <button 
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
      >
        Sign In
      </button>
      {/* TODO: Add form validation and submit logic */}
    </form>
  )
}


