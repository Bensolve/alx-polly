import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CreatePage() {
  return (
    <div className="container mx-auto p-6 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle>Create New Poll</CardTitle>
          <CardDescription>
            Create a poll to get opinions from others
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="question" className="text-sm font-medium">
              Poll Question
            </label>
            <Input
              id="question"
              placeholder="What's your favorite programming language?"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Options</label>
            <Input placeholder="Option 1" />
            <Input placeholder="Option 2" />
            <Input placeholder="Option 3" />
            <Button variant="outline" size="sm">Add Option</Button>
          </div>

          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-medium">
              Description (Optional)
            </label>
            <textarea
              id="description"
              className="w-full p-3 border rounded-md"
              placeholder="Add more details about your poll..."
              rows={3}
            />
          </div>

          <div className="flex gap-2">
            <Button>Create Poll</Button>
            <Button variant="outline">Cancel</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
