import Link from 'next/link'

export default function NotFound() {
  return (
    <main>
      <div className="figure">
        <h2 className="header__middle">Not Found</h2>
        <p className="header__middle">Could not find requested resource</p>
        <div className="header__middle">
          <Link href="/" className=" --btn">
            Return Home
          </Link>
        </div>
      </div>
    </main>
  )
}
