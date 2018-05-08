import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './subtract.css'
import './style.css'
import Header from '../components/header'
import Footer from '../components/footer'
// import './index.css'

const Layout = ({ children, data }) => (
  <main>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <script
      src="https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js"
      type="text/javascript"
      async=""
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono|IBM+Plex+Sans:400,400i,600"
      media="all"
    />
    <main className="page-content" aria-label="Content">
      {children()}
    </main>

    <Footer />
  </main>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
