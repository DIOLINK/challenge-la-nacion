import { articleMock } from '@/__tests__/common'
import { ItemArticle } from '@/components/Sidebar/Main/GridArticles/Article'
import { render } from '@testing-library/react'

it('should render article with valid data', () => {
  const { container } = render(<ItemArticle {...articleMock} />)

  expect(container.querySelector('.com-title-acu b')?.textContent).toBe(
    'Test Headline'
  )
  expect(container.querySelector('.com-date')?.textContent).toBe(
    '3 de diciembre de 2019'
  )
})
it('should render article img valid', async () => {
  const { getByAltText } = await render(<ItemArticle {...articleMock} />)

  const image = getByAltText('Test Headline')

  expect(image).toHaveAttribute(
    'src',
    '/_next/image?url=https%3A%2F%2Fexample.com%2Fimage.jpg&w=3840&q=75'
  )
})
