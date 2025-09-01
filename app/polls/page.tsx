import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PollsPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">All Polls</h1>
        <Button>Create New Poll</Button>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>What's your favorite programming language?</CardTitle>
            <CardDescription>Created by John Doe • 2 days ago</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>JavaScript</span>
                <span>45%</span>
              </div>
              <div className="flex justify-between">
                <span>Python</span>
                <span>35%</span>
              </div>
              <div className="flex justify-between">
                <span>Java</span>
                <span>20%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Best framework for web development?</CardTitle>
            <CardDescription>Created by Jane Smith • 1 day ago</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>React</span>
                <span>60%</span>
              </div>
              <div className="flex justify-between">
                <span>Vue</span>
                <span>25%</span>
              </div>
              <div className="flex justify-between">
                <span>Angular</span>
                <span>15%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
