const path = require('path')
const fs = require('fs')
const { createFilePath } = require(`gatsby-source-filesystem`)

var gitFolder = './src/data/_githubData'
exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `MarkdownRemark`) {
    // const github = createFilePath({
    //   node,
    //   getNode,
    //   basePath: `./_githubData`,
    // }) // somehow this doesnt work, it returns "/_starters/open-crowd-fund/"
    const slug = createFilePath({
      node,
      getNode,
      basePath: `_starters`,
    })
    const stub = slug.replace(/\//gi, '')
    createNodeField({ node, name: `slug`, value: slug })
    createNodeField({ node, name: `stub`, value: stub })
    createNodeField({
      node,
      name: `date`,
      value: new Date(node.frontmatter.date),
    })
    var fromPath = path.join(gitFolder, `${stub}.json`)
    // fs.readFile(fromPath, 'utf8', (err, data) => {
    var data = fs.readFileSync(fromPath, 'utf8')
    const ghdata = JSON.parse(data)
    createNodeField({
      node,
      name: `githubData`,
      value: ghdata,
    })
    // make extra fields for ease of use. totally optional really
    const { repoMetadata } = ghdata
    createNodeField({ node, name: `description`, value: ghdata.description })
    createNodeField({
      node,
      name: `stars`,
      value: repoMetadata.stargazers_count,
    })
    createNodeField({
      node,
      name: `lastUpdated`,
      value: repoMetadata.created_at,
    })
    createNodeField({ node, name: `owner`, value: repoMetadata.owner })
    createNodeField({
      node,
      name: `githubFullName`,
      value: repoMetadata.full_name,
    })
  }
}

// exports.createPages = ({ boundActionCreators, graphql }) => {
//   const { createPage } = boundActionCreators
//   const DSTemplate = path.resolve(`src/templates/design-systems.js`)
//   return graphql(`
//     {
//       allMarkdownRemark(
//         sort: { order: DESC, fields: [frontmatter___date] }
//         limit: 1000
//       ) {
//         edges {
//           node {
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `).then(result => {
//     if (result.errors) {
//       return Promise.reject(result.errors)
//     }

//     result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//       createPage({
//         path: node.fields.slug,
//         component: DSTemplate,
//         context: {
//           slug: node.fields.slug,
//         }, // additional data can be passed via context
//       })
//     })
//   })
// }
