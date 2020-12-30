import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import productStyles from "./productInfo.module.scss"
import Metadata from "../components/metadata"

import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        featured {
          childImageSharp {
            fluid(maxWidth: 450, maxHeight: 200) {
              ...GatsbyImageSharpFluid
            }
           }
        }
      }
      timeToRead
      html
    }
  }
`

const ProductInfo = props => {
  return (
    <Layout>
      <Metadata title={props.data.markdownRemark.frontmatter.title} />
      <div className={productStyles.content}>
        <h1>{props.data.markdownRemark.frontmatter.title}</h1>
        <span className={productStyles.meta}>
          Posted on {props.data.markdownRemark.frontmatter.date} <span> / </span>{" "}
          {props.data.markdownRemark.timeToRead} min read
        </span>
  
        {props.data.markdownRemark.frontmatter.featured && (
          <Img
            className={productStyles.featured}
            fluid={
              props.data.markdownRemark.frontmatter.featured.childImageSharp.fluid
            }
            alt={props.data.markdownRemark.frontmatter.title}
          />
        )}
  
        <div
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        ></div>
      </div>
    </Layout>
  )
}

export default ProductInfo