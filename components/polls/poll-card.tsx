import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface PollCardProps {
  id: string
  question: string
  creator: string
  createdAt: string
  options: Array<{
    text: string
    votes: number
    percentage: number
  }>
  totalVotes: number
}

export function PollCard({ 
  id, 
  question, 
  creator, 
  createdAt, 
  options, 
  totalVotes 
}: PollCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle className="text-lg">{question}</CardTitle>
        <CardDescription>
          Created by {creator} • {createdAt}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="space-y-2">
          {options.map((option, index) => (
            <div key={index} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>{option.text}</span>
                <span>{option.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${option.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="pt-2 border-t">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">
              {totalVotes} votes
            </span>
            <Button size="sm" variant="outline">
              Vote
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
