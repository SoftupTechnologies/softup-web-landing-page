import React, { useState } from "react";
import PropTypes from "prop-types";
import "./paragraph-and-image.scss";
import { Image } from "../../image";
import classNames from "classnames";
import { generateContent } from "../../helpers";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { useStaticQuery, graphql } from "gatsby";

export const ParagraphAndImage = ({ data }) => {
  let classes = classNames({
    paragraphAndImageDiv: true,
    right: data.imagePosition === "right",
    left: data.imagePosition === "left",
  });

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const photos = useStaticQuery(graphql`
    {
      allFile(
        filter: { sourceInstanceName: { eq: "enterpriseTools" } }
        sort: { fields: name, order: DESC }
      ) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `);

  const images = [];

  photos.allFile.edges.map(file => {
    images.push(file.node.publicURL);
  });

  return (
    <div className="displayWithGrid">
      <div className={classes}>
        <div
          className="pImage"
          onClick={() => {
            const imageName = data.imageName.split("/")[1];
            const index = images.findIndex(photo => photo.includes(imageName));

            setPhotoIndex(index);
            setIsOpen(true);
          }}
        >
          <Image filename={data.imageName} />
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() => {
              setPhotoIndex((photoIndex + 1) % images.length);
            }}
          />
        )}
        <div
          className={
            data.imagePosition === "left" ? "pContentLeft" : "pContentRight"
          }
        >
          <div className="title">{data.title}</div>
          <div className="content">{generateContent(data.content)}</div>
        </div>
      </div>
    </div>
  );
};

ParagraphAndImage.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    imageName: PropTypes.string,
    imagePosition: PropTypes.oneOf(["left", "right"]),
    content: PropTypes.arrayOf(PropTypes.object),
  }),
};
