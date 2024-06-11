'use client'
import { Sidebar } from '@/components'
import { useArticles } from '@/context/ArticlesContext'
import { Article, SetTag } from '@/types'
import { useEffect } from 'react'
interface HomePageProps {
  articles: Article[]
  tags: SetTag[]
}
export const HomePage = ({ articles, tags }: HomePageProps) => {
  const { setArticles, setTags } = useArticles()
  useEffect(() => {
    setArticles(articles)
    setTags(tags)
  }, [articles, setArticles, setTags, tags])

  return (
    <main>
      <div className="lay-sidebar">
        <Sidebar.Main />
        <Sidebar.Aside />
      </div>
    </main>
  )
}
