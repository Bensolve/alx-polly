import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-blue-600">ALX Polly</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Create polls, get opinions, and make decisions together. 
            The simplest way to gather feedback from your community.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/polls">
              <Button size="lg">View Polls</Button>
            </Link>
            <Link href="/create">
              <Button variant="outline" size="lg">Create Poll</Button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Create Polls</CardTitle>
              <CardDescription>
                Easily create polls with multiple options and descriptions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Build engaging polls in seconds. Add as many options as you need and customize with descriptions.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Vote & Share</CardTitle>
              <CardDescription>
                Let people vote and share results in real-time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Get instant results as people vote. Share polls with your community and see opinions flow in.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Track Results</CardTitle>
              <CardDescription>
                Visual charts and detailed analytics for every poll
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Beautiful charts and percentages show you exactly what your community thinks about any topic.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
