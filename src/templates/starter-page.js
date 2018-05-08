import React from 'react'
import Helmet from 'react-helmet'

export default function Template({
  data, // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { markdownRemark: post } = data // data.markdownRemark holds our post data
  const { fields, frontmatter } = post
  return (
    <div className="blog-post-container">
      <Helmet title={`Gatsby Starter - ${fields.stub}`} />
      <div className="blog-post">
        <div className="img-wrap">
          <img
            src={`/images/_starters/${fields.stub}.png`}
            alt={frontmatter.repo}
            height="50%"
            width="50%"
          />
        </div>{' '}
        <h1>
          Repo: <a href={frontmatter.repo}>{fields.githubFullName}</a>
        </h1>
        <h2>Description:{fields.description}</h2>
        <h3>Last Updated: {fields.lastUpdated}</h3>
        <h3>Stars: {fields.stars}</h3>
        <h3>
          Demo: <a href={frontmatter.demo}>{frontmatter.demo}</a>
        </h3>
        <h3>
          Repo: <a href={frontmatter.repo}>{frontmatter.repo}</a>
        </h3>
        <h5>Tags</h5>
        {frontmatter.tags && (
          <ul>{frontmatter.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
        )}
        <h5>Features</h5>
        {frontmatter.features && (
          <ul>{frontmatter.features.map(tag => <li key={tag}>{tag}</li>)}</ul>
        )}
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query StarterPage($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        demo
        repo
        description
        tags
        features
      }
      fields {
        slug
        stub
        date
        description
        stars
        lastUpdated
        githubFullName
      }
    }
  }
`
