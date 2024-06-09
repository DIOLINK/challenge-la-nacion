import { createThemePath, isArrayEmpty } from '@/utils'

it('should return true when the array is empty', () => {
  const result = isArrayEmpty([])
  expect(result).toBe(true)
})

it('should return correct URL when given a valid slug', () => {
  const slug = 'example-slug'
  const result = createThemePath(slug)
  expect(result).toBe('/tema/example-slug')
})
