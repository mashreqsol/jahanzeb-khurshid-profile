import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Metadata = ({ title, description, author }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )
  const metaTitle = title || data.site.siteMetadata.title
  const metaDescription = description || data.site.siteMetadata.description
  const metaAuthor = author || data.site.author
  return (
    <Helmet>
      <title>{`${metaTitle} | ${data.site.siteMetadata.title}`}</title>
      <meta name="description" content={metaDescription} />
      <meta name = "author" content = {metaAuthor}/>
    </Helmet>
  )
}

export default Metadata