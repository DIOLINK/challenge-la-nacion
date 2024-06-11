import { getArticles } from '@/services'

it('should fetch articles successfully when API responds with 200 status', async () => {
  const mockArticles = { articles: [{ id: 1, title: 'Test Article' }] }
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: jest.fn().mockResolvedValue(mockArticles),
  })

  const result = await getArticles()

  expect(result).toEqual(mockArticles)
  expect(fetch).toHaveBeenCalledWith(process.env.API_URL)
})
