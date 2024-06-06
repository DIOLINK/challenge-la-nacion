'use client'

export default function ErrorBoundary({ error }: { error: Error }) {
  return (
    <main>
      <div className="figure">
        <h2 className="header__middle">Something went wrong!</h2>
        <p className="header__middle">{error.message}</p>
      </div>
    </main>
  )
}
