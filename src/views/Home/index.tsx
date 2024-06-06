import { Sidebar } from '@/components'
export const HomePage = () => {
  return (
    <main>
      <div className="lay-sidebar">
        <Sidebar.Main />
        <Sidebar.Aside />
      </div>
    </main>
  )
}
