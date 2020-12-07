import React from "react"
import footerStyles from "./footer.module.scss"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  
  const data = useStaticQuery(
    graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
    `
  )
  
  return (
    
    <footer className={footerStyles.siteFooter}>
      <div className={footerStyles.container}>
        <p>
          &copy;{" "} {new Date().getFullYear().toString()}{" "} Mashreqsol. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer