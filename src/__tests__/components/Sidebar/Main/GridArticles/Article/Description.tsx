import { articleMock } from '@/__tests__/common'
import { Description } from '@/components/Sidebar/Main/GridArticles/Article/Description'
import { render } from '@testing-library/react'

it('should render article headline and date correctly', () => {
  const { getByText } = render(<Description {...articleMock} />)

  expect(getByText('Test Headline')).toBeInTheDocument()
  expect(getByText('3 de diciembre de 2019')).toBeInTheDocument()
})
