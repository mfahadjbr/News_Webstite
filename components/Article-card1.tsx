import Image from 'next/image'
import { ArticleTag } from '@/components/Article-tag1'

interface ArticleCardProps {
  title: string
  image?: string
  author?: string
  tag?: 'analysis' | 'exclusive'
  imagePosition?: 'left' | 'top'
  size?: 'small' | 'large'
}

export function ArticleCard({ 
  title, 
  image, 
  author, 
  tag,
  imagePosition = 'top',
  size = 'small'
}: ArticleCardProps) {
  return (
    <article className={`
      group cursor-pointer
      ${imagePosition === 'left' ? 'grid grid-cols-12 gap-4' : 'space-y-3'}
    `}>
      {image && (
        <div className={`
          relative overflow-hidden
          ${imagePosition === 'left' ? 'col-span-4' : 'w-full'}
          ${size === 'large' ? 'aspect-[4/3]' : 'aspect-[3/2]'}
        `}>
          <Image
            src={image || "/placeholder.svg"}
            alt=""
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className={`
        ${imagePosition === 'left' ? 'col-span-8' : ''}
        space-y-2
      `}>
        {tag && <ArticleTag type={tag} />}
        <h3 className={`
          font-serif leading-tight
          ${size === 'large' ? 'text-2xl' : 'text-lg'}
        `}>
          {title}
        </h3>
        {author && (
          <p className="text-sm text-gray-600">{author}</p>
        )}
      </div>
    </article>
  )
}

