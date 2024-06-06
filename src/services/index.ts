import { Articles } from '@/type'

async function getArticles(): Promise<Articles> {
  const res = await fetch(
    'https://jrt2bb3b2nlkw5ozvfcld62wbe0pnifh.lambda-url.us-east-1.on.aws/'
  )
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
  const setTags = new Set<string>()
  resData.forEach((article) =>
    article.taxonomy.tags.forEach((tag) => setTags.add(tag.text))
  )

  return { data: resData, tags: Array.from(setTags).sort() }
}
