import React from 'react'
import Link from 'gatsby-link'

{
  /* <Link to="/page-2/">Go to page 2</Link> */
}

const Header = ({ siteTitle }) => (
  <header className="site-header" role="banner">
    <div className="wrapper">
      <div className="header-inner">
        <a
          className="site-title"
          rel="author"
          href="/"
          title="Gatsby Starter Search"
        >
          <img
            className="logo-lg"
            src="https://d33wubrfki0l68.cloudfront.net/d3b175cca4b3f55dad5444cad88e66451c0d078c/37a69/images/dsr-logo.svg"
            width="98"
            height="98"
          />
          <img
            className="logo-sm"
            src="https://d33wubrfki0l68.cloudfront.net/d478fbdcb6335e9cd4e31ba15262905ed04043db/5723f/images/dsr-logo-small.svg"
            width="143"
            height="36"
          />
        </a>
        <button
          className="pull lines-button"
          type="button"
          role="button"
          aria-label="Toggle Navigation"
        >
          <span className="lines" />
        </button>
      </div>
      <nav className="responsive-nav">
        <ul className="nav">
          {/* <li>
            <Link
              activeClassName="active"
              to="/design-systems/"
              title="Design Systems Gallery"
            >
              Gatsby Starters
            </Link>
          </li> */}
          <li>
            <Link activeClassName="active" to="/about/" title="About">
              About
            </Link>
          </li>
          <li>
            <a
              className="submit"
              href="https://github.com/sw-yx/gatsby-starter-search.git"
              target="_blank"
              title="Submit a Starter"
            >
              <span>Submit</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g fill="none" fillRule="evenodd">
                  <circle cx="12" cy="12" r="12" fill="#73FFE1" />
                  <polygon
                    fill="#000"
                    fillRule="nonzero"
                    points="13 6 11 6 11 11 6 11 6 13 11 13 11 18 13 18 13 13 18 13 18 11 13 11"
                  />
                </g>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
