import { Article } from '@/types'
import Link from 'next/link'

export const Description = (article: Article) => {
  return (
    <div className="mod-caja-nota__descrip lugares">
      <h2 className="com-title-acu">
        <Link href="">
          <b>{article.headlines.basic}</b>
        </Link>
      </h2>
      <h4 className="com-date">{article.display_date as string}</h4>
    </div>
  )
}
