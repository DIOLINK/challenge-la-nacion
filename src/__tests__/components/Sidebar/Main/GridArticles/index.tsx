import { articlesMock, tagsMock } from '@/__tests__/common'
import { customRender } from '@/__tests__/common/mockContext'
import { GridArticle } from '@/components/Sidebar/Main/GridArticles'
import { screen } from '@testing-library/react'

const providerProps = {
  value: { articles: articlesMock(30), tags: tagsMock() },
}
it('should render a section element with the correct class name', () => {
  const { container } = customRender(<GridArticle />, { providerProps })

  const sectionElement = container.querySelector('section')
  expect(sectionElement).toBeInTheDocument()
  expect(sectionElement).toHaveClass(
    'row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade'
  )
})
it('should represent 30 section elements', async () => {
  customRender(<GridArticle />, { providerProps })
  expect(screen.getAllByTestId('id-test-itemArticle')).toHaveLength(30)
})
