'use client'

import Link from 'next/link'
import { ChevronDown, Search } from 'lucide-react'
import { MobileSidebar } from '@/components/Mobile-sidebar'

export default function Header() {
  return (
    <header className="w-full">
      {/* Top navigation - hidden on small screens */}
      <div className="bg-blue-500 text-white hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-12">
            <nav className="flex space-x-6">
              <Link href="/news" className="hover:opacity-80">News</Link>
              <Link href="/innovation" className="hover:opacity-80">Innovation</Link>
              <Link href="/science" className="hover:opacity-80">Science</Link>
              <Link href="/industry" className="hover:opacity-80">Industry</Link>
              <button className="flex items-center hover:opacity-80">
                More <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </nav>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white shadow">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center">
              Logo
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="hover:text-[#3B9EFF]">Home</Link>
              <Link href="/feature" className="hover:text-[#3B9EFF]">Feature</Link>
              <Link href="/shop" className="hover:text-[#3B9EFF]">Shop</Link>
              <Link href="/gallery" className="hover:text-[#3B9EFF]">Gallery</Link>
              <Link href="/blog" className="hover:text-[#3B9EFF]">Blog</Link>
              <Link href="/about" className="hover:text-[#3B9EFF]">About</Link>
              <Link href="/contact" className="hover:text-[#3B9EFF]">Contact</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-3 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3B9EFF] w-full md:w-auto"
                />
                <button
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#3B9EFF]"
                  aria-label="Search"
                >
                  <Search className="h-5 w-5" />
                </button>
              </div>
              <MobileSidebar />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

