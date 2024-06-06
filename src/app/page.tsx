import { dataArticles } from '@/services'
import { HomePage } from '@/views'

export default async function Home() {
  console.log('🚀 ~ Home ~ arrayArticles():', await dataArticles())
  return <HomePage />
}
