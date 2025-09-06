import  LoginForm  from "../../../components/LoginForm";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full space-y-8">
        <h2 className="text-3xl font-bold text-center">Sign In</h2>
        {/* TODO: Add login form */}
        
        <LoginForm />
      </div>
    </div>
  )
}


