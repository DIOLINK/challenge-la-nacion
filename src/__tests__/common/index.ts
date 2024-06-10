import { Article, SetTag, Type } from '@/types'

export const articleMock: Article = {
  _id: '1',
  display_date: '3 de diciembre de 2019',
  headlines: { basic: 'Test Headline' },
  promo_items: {
    basic: {
      type: Type.Image,
      url: 'https://example.com/image.jpg',
    },
  },
  subtype: 'test',
  taxonomy: { tags: [{ text: 'Tag1', slug: '4578_tag1' }] },
  website_url: '/test-url',
}

export function articlesMock(size: number = 5): Article[] {
  let articles: Article[] = []
  for (let i = 0; i < size; i++) {
    articles.push({
      _id: `id${i}`,
      display_date: `${i + 1} de diciembre de 2019`,
      headlines: { basic: 'Test Headline' },
      promo_items: {
        basic: {
          type: Type.Image,
          url: `https://example.com/image${i}.jpg`,
        },
      },
      subtype: `test${i}`,
      taxonomy: { tags: [{ text: `Tag${i}`, slug: `4578${i}_tag${i}` }] },
      website_url: '/test-url',
    })
  }
  return articles
}
export function tagsMock(size: number = 5): SetTag[] {
  let tags: SetTag[] = []
  for (let i = 0; i < size; i++) {
    tags.push({
      count: i,
      slug: `${i}_tag${i}`,
      text: `${i}_Tag`,
    })
  }
  return tags
}
