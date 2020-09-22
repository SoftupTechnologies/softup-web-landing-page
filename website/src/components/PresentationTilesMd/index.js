import React from "react";
import "./presentation-tiles-md.scss";
import PropTypes from "prop-types";
import {MarkdownDisplay} from "../MarkdownDisplay";

export const PresentationTilesMd = ({ data }) => {
    const items = data.map((item, index) => {
        return (
            <div key={index} className={"itemWrapperMd"}>
                <div className={"itemContent"}>
                    <div className={"companyName"}>{item.title}</div>
                    <div className={"separatorMd"} />
                    <div className={"mdContent"}>
                        <MarkdownDisplay data={item.markdown} />
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className={"displayWithGrid"}>
            <div className={"presentationWrapperMd"}>
                <div className={"presentationItemsMd"}>{items}</div>
            </div>
        </div>
    );
};

PresentationTilesMd.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            link: PropTypes.string,
            markdown: PropTypes.string
        })
    ),
};
