import Image from 'next/image'
import Link from 'next/link'

interface NewsArticle {
  category: string
  title: string
  timeAgo: string
  imageUrl?: string
}

export default function NewsPage() {
  const articles: NewsArticle[] = [
    {
      category: 'US',
      title: 'Afghans evacuated by US in chaos of withdrawal are languishing in foreign camps, documents reveal',
      timeAgo: '5h ago',
      imageUrl: '/placeholder.svg'
    },
    {
      category: 'New Orleans',
      title: 'FBI releases more details on how New Orleans attacker planned his rampage',
      timeAgo: '1h ago',
      imageUrl: '/placeholder.svg'
    },
    {
      category: 'UK',
      title: 'MP launches legal action against Andrew Tate over social media posts',
      timeAgo: '8m ago',
      imageUrl: '/placeholder.svg'
    },
    {
      category: 'TikTok',
      title: 'Chinese officials reportedly discuss sale of TikTok in US to Elon Musk',
      timeAgo: '3h ago',
      imageUrl: '/placeholder.svg'
    },
    {
      category: 'US',
      title: "Trump says he will create 'external revenue service' to collect tariff income",
      timeAgo: '1h ago'
    },
    {
      category: 'UK',
      title: "Andrew Malkinson calls miscarriage of justice watchdog's ex-head 'shameless'",
      timeAgo: '2h ago'
    },
    {
      category: 'US politics',
      title: "Minnesota Democrats stage boycott over 'abuse of power' by Republicans",
      timeAgo: '3h ago'
    },
    {
      category: 'Greenland',
      title: "Trump interest in Greenland is 'wake-up call to Copenhagen', says minister",
      timeAgo: '7h ago'
    },
    {
      category: 'France',
      title: "France must stand firm in face of 'new world disorder' embodied by Musk, says PM",
      timeAgo: '4h ago'
    },
    {
      category: 'Depression',
      title: 'Scientists find hundreds more genetic risk factors for depression',
      timeAgo: '6h ago'
    }
  ]

  return (
    <main className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-16">Around The World</h2>
      <div className="grid gap-8">
        {/* Featured Articles Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Main Featured Article */}
          <article className="space-y-4">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
              <Image
                src={articles[0].imageUrl || '/placeholder.svg'}
                alt={articles[0].title}
                fill
                className="object-cover border"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-2">
              <span className="text-red-600 font-semibold">{articles[0].category}</span>
              <h1 className="text-2xl font-bold leading-tight md:text-3xl">
                {articles[0].title}
              </h1>
              <p className="text-gray-500">{articles[0].timeAgo}</p>
            </div>
          </article>

          {/* Secondary Featured Article */}
          <article className="space-y-4">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
              <Image
                src={articles[1].imageUrl || '/placeholder.svg'}
                alt={articles[1].title}
                fill
                className="object-cover border"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-2">
              <span className="text-red-600 font-semibold">{articles[1].category}</span>
              <h2 className="text-xl font-bold leading-tight md:text-2xl">
                {articles[1].title}
              </h2>
              <p className="text-gray-500">{articles[1].timeAgo}</p>
            </div>
          </article>
        </div>

        {/* Grid Articles Section */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.slice(2).map((article, index) => (
            <article key={index} className="border-t pt-4">
              {article.imageUrl && (
                <div className="relative aspect-[16/9] mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={article.imageUrl || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover border"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              )}
              <div className="space-y-2">
                <span className="text-red-600 font-semibold">{article.category}</span>
                <h3 className="font-bold leading-snug">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-sm">{article.timeAgo}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}

