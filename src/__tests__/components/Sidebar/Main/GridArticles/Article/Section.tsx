import { articleMock } from '@/__tests__/common'
import { Section } from '@/components/Sidebar/Main/GridArticles/Article/Section'
import { render } from '@testing-library/react'

it('should render a section element with class "cont-figure"', () => {
  const { container } = render(<Section {...articleMock} />)
  const sectionElement = container.querySelector('section.cont-figure')
  expect(sectionElement).toBeInTheDocument()
})
