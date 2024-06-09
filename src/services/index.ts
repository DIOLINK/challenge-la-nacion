import { Articles, SetTag } from '@/types'
const API_URL = process.env.API_URL
export async function getArticles(): Promise<Articles> {
  const res = await fetch(API_URL as string)
  if (!res.ok) {
    throw new Error('Failed to fetch Articles')
  }
  return res.json() as Promise<Articles>
}

export async function dataArticles(filter: string = '7') {
  const [{ articles }] = await Promise.all([getArticles()])

  const resFilter = articles.filter((article) => article.subtype === filter)
  const resData = resFilter.map((article) => ({
    ...article,
    display_date: new Date(article.display_date).toLocaleString('es-AR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }),
  }))

  const tags = resData.reduce<Record<string, SetTag>>((reArticle, article) => {
    article.taxonomy.tags.forEach((tag) => {
      if (!reArticle[tag.slug]) {
        reArticle[tag.slug] = {
          ...tag,
          count: 1,
        }
      } else {
        reArticle[tag.slug].count++
      }
    })
    return reArticle
  }, {})

  return {
    data: resData,
    tags: Object.values(tags).sort((a, b) => b.count - a.count),
  }
}
