import { dataArticles } from '@/services'
import Link from 'next/link'
export const dynamicParams = false
export async function generateStaticParams() {
  const { tags } = await dataArticles()
  const tagSlugs = tags.map((tag) => tag.slug)
  return tagSlugs.map((tagSlug) => ({
    slug: tagSlug,
  }))
}

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params
  return (
    <div>
      page {slug}
      <Link href="/" className=" --btn">
        Return Home
      </Link>
    </div>
  )
}
