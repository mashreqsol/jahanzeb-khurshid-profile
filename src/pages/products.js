import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import productStyles from "./products.module.scss"

import Layout from "../components/layout"

const Products = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
          edges {
            node {
              frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
                featured {
                  childImageSharp {
                    fluid(maxWidth: 50) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              timeToRead
              excerpt
              id
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )
  return (
    <Layout>
      <ul className={productStyles.posts}>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li className={productStyles.post} key={edge.node.id}>
              <h2>
                <Link to={`/products/${edge.node.fields.slug}/`}>
                  {edge.node.frontmatter.title}
                </Link>
              </h2>
              <div className={productStyles.meta}>
                <span>
                  
                  {edge.node.timeToRead} min read
                </span>
              </div>
              {edge.node.frontmatter.featured && (
                <Img
                  className={productStyles.featured}
                  fluid={edge.node.frontmatter.featured.childImageSharp.fluid}
                  alt={edge.node.frontmatter.title}
                />
              )}
              <p className={productStyles.excerpt}>{edge.node.excerpt}</p>
              <div className={productStyles.button}>
                <Link to={`/products/${edge.node.fields.slug}/`}>Read More</Link>
              </div>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default Products