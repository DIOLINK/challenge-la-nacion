import { useArticles } from '@/context/ArticlesContext'
import { createThemePath } from '@/utils'
import Link from 'next/link'

export const Tags = () => {
  const { tags } = useArticles()
  return (
    <div className="row">
      <div className="cont_tags com-secondary-tag hlp-marginBottom-20">
        {tags.map((tag) => (
          <Link
            key={tag.slug}
            href={createThemePath(tag.slug)}
            data-testid={`id-test`}
          >
            {tag.text}
          </Link>
        ))}
      </div>
    </div>
  )
}
