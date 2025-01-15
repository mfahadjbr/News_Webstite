interface SectionHeaderProps {
    title: string
  }
  
  export function SectionHeader({ title }: SectionHeaderProps) {
    return (
      <div className="flex items-center space-x-1 mb-4">
        <h2 className="text-xl font-serif font-bold">{title}</h2>
        <span className="text-gray-400">›</span>
      </div>
    )
  }
  
  