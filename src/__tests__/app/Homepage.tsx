import { dataArticles } from '@/services'
import { HomePage } from '@/views'
import { render, screen } from '@testing-library/react'

const unlockedFetch = global.fetch

beforeAll(() => {
  global.fetch = () =>
    Promise.resolve({
      json: () => Promise.resolve([]),
    } as Response)
})

afterAll(() => {
  global.fetch = unlockedFetch
})
it('should render home page', () => {
  render(<HomePage />)
  expect(screen.getByText('Acumulado Grilla')).toBeInTheDocument()
})

const MOCK_ARTICLES = {
  articles: [
    {
      subtype: '7',
      display_date: '2023-10-01T00:00:00Z',
      taxonomy: { tags: [{ text: 'Tag1' }] },
    },
    {
      subtype: '8',
      display_date: '2023-10-02T00:00:00Z',
      taxonomy: { tags: [{ text: 'Tag2' }] },
    },
  ],
}

it('should return articles filtered by default subtype "7"', async () => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    ok: true,
    json: async () => MOCK_ARTICLES,
  } as Response)

  const { data, tags } = await dataArticles()

  expect(data).toHaveLength(1)
  expect(data[0].subtype).toBe('7')
  expect(tags).toEqual(['Tag1'])
})
it('should return the correct format of the article dates', async () => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    ok: true,
    json: async () => MOCK_ARTICLES,
  } as Response)

  const { data } = await dataArticles()

  expect(data[0].display_date).toEqual(
    new Date('2023-10-01T00:00:00Z').toLocaleString('es-AR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  )
})
