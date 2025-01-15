'use client'

import { useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu, Search } from 'lucide-react'
import Link from "next/link"

export function MobileSidebar() {
  const [isSearchVisible, setIsSearchVisible] = useState(false)

  const toggleSearch = () => setIsSearchVisible(!isSearchVisible)

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-gray-900 text-white p-0">
        <div className="flex flex-col h-full">
          <div className="p-4">
            <Button variant="ghost" onClick={toggleSearch} className="w-full justify-start text-white hover:text-gray-300">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
            {isSearchVisible && (
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full p-2 bg-gray-800 text-white rounded"
                />
              </div>
            )}
          </div>
          <nav className="flex-grow">
            {[
              { href: "/news", label: "News" },
              { href: "/innovation", label: "Innovation" },
              { href: "/science", label: "Science" },
              { href: "/industry", label: "Industry" },
              { href: "/", label: "Home" },
              { href: "/feature", label: "Feature" },
              { href: "/shop", label: "Shop" },
              { href: "/gallery", label: "Gallery" },
              { href: "/blog", label: "Blog" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" }
            ].map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="block px-4 py-2 hover:bg-gray-800 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}

