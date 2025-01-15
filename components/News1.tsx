import Image from "next/image"
import Link from "next/link"

export default function NewsGrid() {
  const sections = [
    {
      title: "BAY AREA",
      articles: [
        {
          image: "/placeholder.svg",
          title: "Bay Area biotech firm once worth $2.3 billion lays off 40% of staff",
          alt: "Modern office building exterior"
        },
        {
          title: "Hotel booking sites caught overcharging travelers from Bay Area"
        },
        {
          title: "Almost nobody remembers one of San Francisco's worst betrayals"
        }
      ]
    },
    {
      title: "TRAVEL",
      articles: [
        {
          image: "/placeholder.svg",
          title: "'A bit ridiculous': National park activity fee could go up threefold",
          alt: "River rafting in a canyon"
        },
        {
          title: "Outdoor giant ends travel program, lays off 428 employees"
        },
        {
          title: "'The deathblow': Boat tours off a Hawaii beach may have to shut down"
        }
      ]
    },
    {
      title: "FOOD",
      articles: [
        {
          image: "/placeholder.svg",
          title: "In tiny NorCal town, famed SF bartender flips delicious burgers",
          alt: "Burger and fries on a plate"
        },
        {
          title: "Calif. In-N-Out erupts into cheers as weary firefighters walk in"
        },
        {
          title: "'A punch in the gut': The ugly world of bad Bay Area restaurant reviews"
        }
      ]
    },
    {
      title: "LOS ANGELES",
      articles: [
        {
          image: "/placeholder.svg",
          title: "California's richest coastline destroyed by Palisades Fire in Malibu",
          alt: "Coastal scene with smoke"
        },
        {
          title: "Disneyland just opened its first food hall. Here's what it's like."
        },
        {
          title: "'Right thing at all costs': Bay Area app thrives amid LA fires"
        }
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sections.map((section, index) => (
          <div key={index} className="space-y-6">
            <h2 className="text-xl font-bold tracking-tight border-b border-gray-200 pb-2">
              {section.title}
            </h2>
            
            <div className="space-y-6">
              {/* Featured Article */}
              <Link 
                href="#" 
                className="block group"
              >
                <div className="aspect-[4/3] relative overflow-hidden rounded-lg mb-3">
                  <Image
                    src={section.articles[0].image || "/placeholder.svg"}
                    alt={section.articles[0].alt || "Article thumbnail"}
                    fill
                    className="object-cover transition-transform group-hover:scale-105 border-2"
                  />
                </div>
                <h3 className="font-semibold text-lg leading-snug group-hover:text-blue-600">
                  {section.articles[0].title}
                </h3>
              </Link>

              {/* Additional Articles */}
              <div className="space-y-4 border-t border-gray-100 pt-4">
                {section.articles.slice(1).map((article, articleIndex) => (
                  <Link 
                    key={articleIndex}
                    href="#" 
                    className="block group"
                  >
                    <h3 className="text-sm font-medium leading-snug group-hover:text-blue-600">
                      {article.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

