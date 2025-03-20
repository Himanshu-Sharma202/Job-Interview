import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "Oops! The page you are looking for does not exist.",
}

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6 text-center">
      {/* 404 Illustration */}
    

      {/* Text Content */}
      <h1 className="text-4xl font-bold text-gray-800 mt-6">Oops! Page Not Found</h1>
      <p className="text-gray-600 mt-2 text-lg">
        The page you are looking for might have been moved or deleted.
      </p>

      {/* Go Back Button */}
      <Link
        href={"/"}
        className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
      >
        Go to Homepage
      </Link>
    </div>
  )
}
