import React from 'react'
import Link from "next/link"

export const BaseHeader = () => {
  return (
    <header className="bg-green-500">
      <div className="container flex items-center justify-between h-14 px-4 md:px-6">
        <nav className="flex items-center space-x-4">
          <Link className="flex items-center space-x-2 text-white" href="#">
            <span className="font-semibold">Home</span>
          </Link>
          <Link className="text-white" href="#">
            Articles
          </Link>
          <Link className="text-white" href="#">
            About
          </Link>
          <Link className="text-white" href="#">
            Jobs
          </Link>
          <Link className="text-white" href="#">
            Teams
          </Link>
        </nav>
      </div>
    </header>
  )
}
