interface ArticleTagProps {
    type: 'analysis' | 'exclusive'
  }
  
  export function ArticleTag({ type }: ArticleTagProps) {
    return (
      <span className={`
        inline-block px-2 py-0.5 text-xs font-medium
        ${type === 'analysis' ? 'text-gray-600' : 'bg-black text-white uppercase'}
      `}>
        {type === 'analysis' ? 'Analysis' : 'EXCLUSIVE'}
      </span>
    )
  }
  
  