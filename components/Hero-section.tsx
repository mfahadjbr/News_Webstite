import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-[2fr_1fr] gap-8">
        <div className="bg-gray-200 p-6 rounded-lg">
          <div className="space-y-2">
            <div className="flex items-center space-x-4">
              <span className="text-sm">Innovation</span>
              <span className="text-sm text-gray-500">2 Hours ago</span>
            </div>
            <h1 className="text-4xl font-bold leading-tight">
              Charge Two Devices at the Same Time With This Magnetic Wireless Charging Dock
            </h1>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-4 rounded">
                <Image
                  src="/placeholder.svg"
                  alt="Charging Dock"
                  width={300}
                  height={200}
                  className="w-full"
                />
                <p className="mt-2 text-sm">
                  Charge Two Devices at the Same Time With This Magnetic Wireless Charging Dock
                </p>
              </div>
              <div className="bg-white p-4 rounded">
                <Image
                  src="/placeholder.svg"
                  alt="Moon Rover"
                  width={300}
                  height={200}
                  className="w-full"
                />
                <p className="mt-2 text-sm">
                  Tiny moon rover could be a stepping stone to Mars
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-200 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Popular this week</h2>
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex space-x-4">
                <Image
                  src="/placeholder.svg"
                  alt="Article thumbnail"
                  width={100}
                  height={100}
                  className="rounded"
                />
                <div>
                  <div className="flex items-center space-x-2 text-sm">
                    <span>Innovation</span>
                    <span className="text-gray-500">2 Hours ago</span>
                  </div>
                  <Link href="#" className="hover:text-[#3B9EFF]">
                    {i === 0 ? "7 Ways You Can Reduce Climate Change" :
                     i === 1 ? "New Study Reveals Why Whales Don't Get Cancer" :
                     "Tiny moon rover could be a stepping stone to Mars"}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

