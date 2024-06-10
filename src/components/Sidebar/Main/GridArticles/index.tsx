import { useArticles } from '@/context/ArticlesContext'
import { ItemArticle } from './Article'

export const GridArticle = () => {
  const { articles } = useArticles()
  return (
    <section className="row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade">
      {articles.map((article) => (
        <ItemArticle {...article} key={article._id} />
      ))}
    </section>
  )
}
