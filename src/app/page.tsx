import { dataArticles } from '@/services'
import { HomePage } from '@/views'

export default async function Home() {
  const { data, tags } = await dataArticles()

  return <HomePage articles={data} tags={tags} />
}
