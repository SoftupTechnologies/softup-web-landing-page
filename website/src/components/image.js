import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image/index"
import PropTypes from "prop-types"
import React from "react"

export const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename)
      })
      if (!image) {
        return null
      }
      return (
        <Img
          style={{ maxHeight: "600px" }}
          alt={props.alt}
          fluid={image.node.childImageSharp.fluid}
        />
      )
    }}
  />
)

Image.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
}
