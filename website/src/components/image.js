import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image/index";
import PropTypes from "prop-types";
import React from "react";

export const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              absolutePath
              name
              childImageSharp {
                fluid(maxWidth: 2000, quality: 100) {
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
        return n.node.absolutePath.includes(props.filename);
      });
      if (!image) {
        return null;
      }
      return (
        <Img
          style={{ maxHeight: "600px" }}
          alt={props.alt}
          fluid={image.node.childImageSharp.fluid}
        />
      );
    }}
  />
);

Image.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
  highQuality: PropTypes.bool,
};
