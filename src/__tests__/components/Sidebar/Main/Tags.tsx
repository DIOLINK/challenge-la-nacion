import { articlesMock, tagsMock } from '@/__tests__/common'
import { customRender } from '@/__tests__/common/mockContext'
import { Tags } from '@/components/Sidebar/Main/Tags'
import { screen } from '@testing-library/react'
const providerProps = {
  value: { articles: articlesMock(), tags: tagsMock(10) },
}
it('should render tags correctly when tags are available', () => {
  customRender(<Tags />, {
    providerProps,
  })
  expect(screen.getAllByTestId('id-test')).toHaveLength(10)
})
