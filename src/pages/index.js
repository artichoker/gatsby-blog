import React from "react"
import { graphql, Link } from 'gatsby'
import Header from '../components/Header'
import { Helmet } from 'react-helmet'

export default ({data}) => {
    return (
    <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>My Title</title>
            <link ref="cannonical" href="http://example.com/" />
        </Helmet>
        <Link to="/about">about</Link>{/** link to about */}
        <Header title="トップページ" />
        {data.allMarkdownRemark.edges.map (({node}) => (
            <div key="{node.id}">
                <h3>
                    {node.frontmatter.title}
                    <span>
                        {node.frontmatter.date}
                    </span>
                </h3>
                <p>{node.excerpt}</p>
            </div>
        ))}
    </div>
    )
}
export const query = graphql`
query {
    allMarkdownRemark{
      edges{
        node{
          frontmatter{
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`
