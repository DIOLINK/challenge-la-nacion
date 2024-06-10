import { Article } from '@/types'
import { Description } from './Description'
import { Section } from './Section'

export const ItemArticle = (article: Article) => {
  return (
    <article className="mod-caja-nota lugares w-100-mobile" key={article._id}>
      <Section {...article} />
      <Description {...article} />
    </article>
  )
}
