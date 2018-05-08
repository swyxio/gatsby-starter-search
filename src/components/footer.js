import React from 'react'
import Link from 'gatsby-link'

const footer = ({ siteTitle }) => (
  <footer className="footer-wrap">
    {' '}
    <span className="footer-border" />{' '}
    <div className="footer">
      {' '}
      <span>Made with 💜 by swyx. Design from Jad Limcaco.</span>{' '}
      <span className="coffee">
        <a target="_blank" href="https://twitter.com/swyx">
          Follow on Twitter
        </a>{' '}
        🐦
      </span>{' '}
    </div>{' '}
  </footer>
)

export default footer
