import React from 'react'
import Link from 'gatsby-link'

class IndexPage extends React.Component {
  state = { currentTag: 'all' }
  toggleMode = tag => () => this.setState({ currentTag: tag })
  render() {
    const { data } = this.props
    const { allMarkdownRemark } = data
    const { edges } = allMarkdownRemark

    const { currentTag } = this.state
    let tags = new Set()
    edges.forEach(
      ({ node }) =>
        node.frontmatter.tags &&
        node.frontmatter.tags.forEach(tag => tags.add(tag))
    )
    tags = Array.from(tags) // .sort((a, b) => a > b)
    const tools =
      currentTag === 'all'
        ? edges
        : edges.filter(edge => edge.node.frontmatter.tags.includes(currentTag))
    return (
      <article className="post post-tools">
        <header className="post-header clearfix">
          <div className="post-head-wrap">
            {' '}
            <div className="post-head-content">
              <h1 className="post-title">Gatsby Starters</h1>
              <p>An ever growing list of gatsby starters.</p>
            </div>{' '}
            <img
              className="illustration"
              src="https://d33wubrfki0l68.cloudfront.net/6a096d617ad46fcb522c647cf847af91f2982b9d/3c13a/images/illustration-tools.svg"
              width="94"
              height="86"
              alt="Design System Tools"
            />
          </div>{' '}
        </header>
        <ul className="filter">
          {' '}
          <li className={currentTag === 'all' && 'active'}>
            <a onClick={this.toggleMode('all')}>
              All <span className="number">({edges.length})</span>
            </a>
          </li>{' '}
          {tags.map(tag => (
            <li key={tag} className={tag === currentTag && 'active'}>
              <a onClick={this.toggleMode(tag)}>
                <span className="number">{capitalizeFirstLetter(tag)}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="post-content holder">
          {tools.map(art => {
            const { demo, repo, features, tags, title } = art.node.frontmatter
            const {
              stub,
              slug,
              githubData,
              description,
              githubFullName,
            } = art.node.fields
            // console.log('art.node.fields', art.node.fields)
            return (
              <a
                className="block block-tools"
                // href={}
                title={art.node.frontmatter.title}
                target="_blank"
                key={stub}
              >
                {' '}
                <div className="img-wrap">
                  <img
                    src={`/images/_starters/${stub}.png`}
                    alt={repo}
                    width="800"
                    height="400"
                  />
                </div>{' '}
                <div className="content">
                  {' '}
                  <h2>{githubFullName}</h2>{' '}
                  <p className="clamp">{description}</p>{' '}
                </div>{' '}
              </a>
            )
          })}
        </div>
      </article>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query indexQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            demo
            repo
            tags
            features
          }
          fields {
            stub
            lastUpdated
            description
            githubFullName
            owner {
              avatar_url
            }
            githubData {
              repoMetadata {
                full_name
              }
            }
            stars
          }
        }
      }
    }
  }
`

function capitalizeFirstLetter(string) {
  return string
    .split('-')
    .map(str => str.charAt(0).toUpperCase() + str.slice(1))
    .join(' ')
}
