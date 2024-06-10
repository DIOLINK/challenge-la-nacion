import { GridArticle } from './GridArticles'
import { Tags } from './Tags'
import { Title } from './Title'

export const Main = () => {
  return (
    <div className="sidebar__main">
      <Title />
      <Tags />
      <GridArticle />
    </div>
  )
}
