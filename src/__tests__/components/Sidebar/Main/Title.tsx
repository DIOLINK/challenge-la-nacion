import { Title } from '@/components/Sidebar/Main/Title'
import { render } from '@testing-library/react'

it('should render without crashing', () => {
  const { container } = render(<Title />)
  expect(container).toBeDefined()
})
