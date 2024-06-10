'use client'
import { Article, SetTag } from '@/types'
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'

interface ArticlesContextProps {
  articles: Article[]
  tags: SetTag[]
  setArticles: Dispatch<SetStateAction<Article[]>>
  setTags: Dispatch<SetStateAction<SetTag[]>>
}

export const ArticlesContext = createContext<ArticlesContextProps>({
  articles: [],
  tags: [],
  setArticles: () => {},
  setTags: () => {},
})

interface ArticlesContextProviderProps {}
export const ArticlesContextProvider = ({
  children,
}: PropsWithChildren<ArticlesContextProviderProps>) => {
  const [articles, setArticles] = useState<Article[]>([])
  const [tags, setTags] = useState<SetTag[]>([])

  return (
    <ArticlesContext.Provider
      value={{
        articles: articles.slice(0, 30),
        tags: tags.slice(0, 10),
        setArticles,
        setTags,
      }}
    >
      {children}
    </ArticlesContext.Provider>
  )
}
export const useArticles = () => {
  return useContext(ArticlesContext)
}
