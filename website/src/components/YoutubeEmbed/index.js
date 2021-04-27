import React from "react";
import PropTypes from "prop-types";
import "./youtube-embed.scss";

export const YoutubeEmbed = ({ data }) => (
  <div className="displayWithGrid">
    <div className="youtube-embed">
      {data?.map((embedId, index) => (
        <div key={index} className="video-responsive">
          <iframe
            width="100%"
            height="480"
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      ))}
    </div>
  </div>
);

YoutubeEmbed.propTypes = {
  data: PropTypes.array.isRequired
};
