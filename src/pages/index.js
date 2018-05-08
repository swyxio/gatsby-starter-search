import React from 'react'
import Link from 'gatsby-link'

class IndexPage extends React.Component {
  state = { currentTag: 'official', sortMode: 'stars' }
  toggleMode = tag => () => this.setState({ currentTag: tag })
  toggleSort = mode => () => this.setState({ sortMode: mode })
  render() {
    const { data } = this.props
    const { allMarkdownRemark } = data
    const { edges } = allMarkdownRemark

    const { currentTag, sortMode } = this.state
    let tags = new Set()
    edges.forEach(
      ({ node }) =>
        node.frontmatter.tags &&
        node.frontmatter.tags.forEach(tag => tags.add(tag))
    )
    tags = Array.from(tags).sort((a, b) => a.localeCompare(b))
    const tools =
      currentTag === 'all'
        ? edges
        : edges.filter(edge => edge.node.frontmatter.tags.includes(currentTag))
    return (
      <article className="post post-tools" style={{ padding: '0px 20px' }}>
        <header className="post-header clearfix">
          <div className="post-head-wrap">
            {' '}
            <div className="post-head-content">
              <h1 className="post-title">Gatsby Starters by Tags</h1>
              <p>
                An ever growing list of gatsby starters. (manually tagged) Go{' '}
                <Link to="/dependencies">here</Link> to filter by dependencies.
              </p>
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
        {'Sort  '}
        <ul className="filter">
          <li className={'chron' === sortMode && 'active'}>
            <a onClick={this.toggleSort('chron')}>
              <span className="number">Most Recent</span>
            </a>
          </li>
          <li className={'stars' === sortMode && 'active'}>
            <a onClick={this.toggleSort('stars')}>
              <span className="number">Stars</span>
            </a>
          </li>
        </ul>
        {'Tags   '}
        <ul className="filter">
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
          {tools
            .sort((a, b) => {
              let a1, b1
              switch (sortMode) {
                case 'stars':
                  a1 = a.node.fields.stars
                  b1 = b.node.fields.stars
                  return b1 - a1
                default:
                  a1 = new Date(a.node.fields.lastUpdated)
                  b1 = new Date(b.node.fields.lastUpdated)
                  // console.log({ a1, b1, comp: a1 - b1 })
                  return b1 - a1
              }
            })
            .map(art => {
              const { demo, repo, features, tags, title } = art.node.frontmatter
              const {
                stub,
                slug,
                githubData,
                description,
                githubFullName,
                lastUpdated,
                stars,
                // allDependencies,
              } = art.node.fields
              // console.log({ allDependencies })
              // console.log('art.node.fields', art.node.fields)
              return (
                <Link
                  className="block block-tools"
                  to={stub}
                  title={art.node.frontmatter.title}
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
                    <em>
                      <span>{stars}⭐</span>
                      {'   '}
                      Last Updated: {new Date(lastUpdated).toDateString()}
                    </em>{' '}
                    <p className="clamp">{description}</p>{' '}
                  </div>{' '}
                </Link>
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
