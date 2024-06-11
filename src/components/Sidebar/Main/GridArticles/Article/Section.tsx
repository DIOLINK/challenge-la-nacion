import { Article } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

export const Section = (article: Article) => {
  return (
    <section className="cont-figure">
      <Link href="/" className="figure">
        <picture className="content-pic picture">
          <Image
            src={
              article.promo_items?.basic.url ??
              'https://bucket1.glanacion.com/anexos/fotos/22/3054322h600.jpg'
            }
            alt={article.headlines.basic}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            style={{
              objectFit: 'cover',
            }}
            className="content-img"
          />
        </picture>
      </Link>
    </section>
  )
}
