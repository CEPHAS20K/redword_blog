import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <heade>
        <h1>redwoodjs blog </h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.about()}>about</Link>
            </li>
          </ul>
        </nav>
      </heade>
      <main></main>
    </>
  )
}

export default HomePage
