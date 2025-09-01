"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function AuthForm() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Welcome to ALX Polly</CardTitle>
        <CardDescription>
          {isLogin ? "Sign in to your account" : "Create a new account to start polling"}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="text-sm font-medium">
            Password
          </label>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        {!isLogin && (
          <div className="space-y-2">
            <label htmlFor="confirmPassword" className="text-sm font-medium">
              Confirm Password
            </label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
            />
          </div>
        )}
        <div className="space-y-2">
          <Button className="w-full">
            {isLogin ? "Sign In" : "Create Account"}
          </Button>
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Create Account" : "Sign In"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
