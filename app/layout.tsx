import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ALX Polly - Polling App",
  description: "Create and vote on polls",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                ALX Polly
              </Link>
              <div className="flex gap-4">
                <Link href="/polls" className="text-gray-600 hover:text-gray-900">
                  View Polls
                </Link>
                <Link href="/create" className="text-gray-600 hover:text-gray-900">
                  Create Poll
                </Link>
                <Link href="/auth" className="text-gray-600 hover:text-gray-900">
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  )
}
