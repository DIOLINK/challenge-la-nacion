import { Article, SetTag } from '@/types'
import { createContext } from 'react'

interface ArticlesContextProps {
  articles: Article[]
  tags: SetTag[]
}

export const mockContext = createContext<ArticlesContextProps>({
  articles: [],
  tags: [],
})
