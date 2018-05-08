import React from 'react'
import Link from 'gatsby-link'

class AboutPage extends React.Component {
  render() {
    return (
      <article className="post post-ds">
        {' '}
        <header className="post-header clearfix">
          {' '}
          <div className="post-head-wrap">
            {' '}
            <div className="post-head-content">
              {' '}
              <h1 className="post-title">About the Site</h1>{' '}
              <p>
                find your gatsby starter!
              </p>{' '}
            </div>
            <img
              className="illustration"
              src="https://d33wubrfki0l68.cloudfront.net/858f19cff3de6be1167b958ea5d56d1040767517/9f16d/images/dsr-logo-blocks.svg"
              width="120"
              height="122"
              alt="Design Systems Repo"
            />
          </div>{' '}
        </header>{' '}
        <div className="page-about">
          {' '}
          <div className="page-about-wrap">
            {' '}
            <div className="about-credits">
              {' '}
              <h2>Credits</h2>{' '}
              <p>
                Design was taken from Jad Limcaco's brilliant Design Systems Repo. See them for more design credits. The build is done through{' '}
                <a href="https://www.netlify.com/" title="Netlify">
                  🌎 Netlify
                </a>. They are also providing the CDN and SSL.
              </p>{' '}
            </div>{' '}
            <div className="about-connect">
              {' '}
              <h2>Connect with Me</h2>{' '}
              <ul>
                {' '}
                <li>
                  <a className="twitter" href="https://twitter.com/swyx/">
                    <svg
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      // xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      width="32px"
                      height="32px"
                      viewBox="0 0 32 32"
                      enable-background="new 0 0 32 32"
                      // xml:space="preserve"
                    >
                      {' '}
                      <path
                        fill="#444444"
                        d="M32,6.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6C25.7,3.8,24,3,22.2,3 c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5C10.3,10.8,5.5,8.2,2.2,4.2c-0.6,1-0.9,2.1-0.9,3.3c0,2.3,1.2,4.3,2.9,5.5 c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1C2.9,27.9,6.4,29,10.1,29c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C30,8.5,31.1,7.4,32,6.1z"
                      />{' '}
                    </svg>{' '}
                    Twitter
                  </a>
                </li>{' '}
                <li>
                  <a className="github" href="https://github.com/sw-yx/">
                    <svg
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      // xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      width="32px"
                      height="32px"
                      viewBox="0 0 32 32"
                      enable-background="new 0 0 32 32"
                      // xml:space="preserve"
                    >
                      {' '}
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        fill="#444444"
                        d="M16,0.4c-8.8,0-16,7.2-16,16c0,7.1,4.6,13.1,10.9,15.2 c0.8,0.1,1.1-0.3,1.1-0.8c0-0.4,0-1.4,0-2.7c-4.5,1-5.4-2.1-5.4-2.1c-0.7-1.8-1.8-2.3-1.8-2.3c-1.5-1,0.1-1,0.1-1 c1.6,0.1,2.5,1.6,2.5,1.6c1.4,2.4,3.7,1.7,4.7,1.3c0.1-1,0.6-1.7,1-2.1c-3.6-0.4-7.3-1.8-7.3-7.9c0-1.7,0.6-3.2,1.6-4.3 c-0.2-0.4-0.7-2,0.2-4.2c0,0,1.3-0.4,4.4,1.6c1.3-0.4,2.6-0.5,4-0.5c1.4,0,2.7,0.2,4,0.5C23.1,6.6,24.4,7,24.4,7 c0.9,2.2,0.3,3.8,0.2,4.2c1,1.1,1.6,2.5,1.6,4.3c0,6.1-3.7,7.5-7.3,7.9c0.6,0.5,1.1,1.5,1.1,3c0,2.1,0,3.9,0,4.4 c0,0.4,0.3,0.9,1.1,0.8C27.4,29.5,32,23.5,32,16.4C32,7.6,24.8,0.4,16,0.4z"
                      />{' '}
                    </svg>{' '}
                    GitHub
                  </a>
                </li>{' '}
              </ul>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
      </article>
    )
  }
}

export default AboutPage

// export const pageQuery = graphql`
//   query TalksQuery {
//     allMarkdownRemark(
//       filter: { id: { regex: "/_talks/" } }
//       sort: { fields: [fields___date], order: DESC }
//     ) {
//       edges {
//         node {
//           frontmatter {
//             title
//             date
//             company
//             link
//             image
//             description
//             tags
//             author
//           }
//           fields {
//             slug
//             date
//           }
//         }
//       }
//     }
//   }
// `
