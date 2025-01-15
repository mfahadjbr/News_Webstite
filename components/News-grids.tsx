import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export default function NewsGrid() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Section Headers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <Link href="/business" className="text-red-500 text-xl font-bold hover:underline">
          BUSINESS ❯
        </Link>
        <Link href="/sport" className="text-red-500 text-xl font-bold hover:underline">
          SPORT ❯
        </Link>
        <Link href="/world" className="text-red-500 text-xl font-bold hover:underline">
          WORLD ❯
        </Link>
      </div>

      {/* Main News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Business Section */}
        <div className="space-y-6">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <Image
                src="/placeholder.svg"
                alt="Power lines at sunset"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold mb-2">
                  Revision of agreements with 14 IPPs approved to reduce power cost with Rs37bn annual savings for consumers
                </h2>
              </div>
            </CardContent>
          </Card>
          
          <div className="space-y-4">
            {/* Additional Business News Items */}
            <NewsItem
              title="Aurangzeb eyes joint ventures, secondary listings in Hong Kong: report"
              imageUrl="/placeholder.svg"
              small
            />
            <NewsItem
              title="US, China and UK remain top 3 destinations of Pakistani exports: SBP"
              imageUrl="/placeholder.svg"
              small
            />
            <NewsItem
              title="Nestle, Unilever and PIA among 'happiest workplaces' in Pakistan: report"
              imageUrl="/placeholder.svg"
              small
            />
          </div>
        </div>

        {/* Sport Section */}
        <div className="space-y-6">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <Image
                src="/placeholder.svg"
                alt="Lahore Qalandars stadium"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold mb-2">
                  Lahore Qalandars get Mitchell for PSL 10; Williamson, Warner picked by Karachi Kings
                </h2>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {/* Additional Sport News Items */}
            <NewsItem
              title="Djokovic joins Alcaraz, Sinner in Australian Open second round"
              imageUrl="/placeholder.svg"
              small
            />
            <NewsItem
              title="Barcelona thrash Real to clinch Spanish Super Cup"
              imageUrl="/placeholder.svg"
              small
            />
            <NewsItem
              title="South Africa's Lategan wins Dakar stage eight to consolidate lead"
              imageUrl="/placeholder.svg"
              small
            />
          </div>
        </div>

        {/* World Section */}
        <div className="space-y-6">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <Image
                src="/placeholder.svg"
                alt="Political news"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold mb-2">
                  Sheikh Hasina's niece resigns as UK anti-corruption minister over ties to ex-PM
                </h2>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {/* Additional World News Items */}
            <NewsItem
              title="Indian police arrest 44 men accused of raping teenager over five years in Kerala"
              imageUrl="/placeholder.svg"
              small
            />
            <NewsItem
              title="Special counsel report finds Donald Trump engaged in 'criminal effort' to overturn 2020 US Election"
              imageUrl="/placeholder.svg"
              small
            />
            <NewsItem
              title="'Ball in Hamas's court' on Gaza deal: Blinken"
              imageUrl="/placeholder.svg"
              small
            />
          </div>
        </div>
      </div>
    </div>
  )
}

// News Item Component for smaller cards
function NewsItem({ title, imageUrl, small = false }: { title: string; imageUrl: string; small?: boolean }) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0 flex gap-4">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          width={small ? 100 : 200}
          height={small ? 100 : 150}
          className="w-24 h-24 object-cover"
        />
        <div className="p-2 flex-1">
          <h3 className="font-semibold text-sm">{title}</h3>
        </div>
      </CardContent>
    </Card>
  )
}

