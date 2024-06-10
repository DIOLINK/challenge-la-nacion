import { ArticlesContext } from '@/context/ArticlesContext'
import { render } from '@testing-library/react'

export const customRender = (
  children: React.ReactNode,
  { providerProps, ...renderOptions }: any
) => {
  return render(
    <ArticlesContext.Provider {...providerProps}>
      {children}
    </ArticlesContext.Provider>,
    renderOptions
  )
}
