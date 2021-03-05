import React from "react";
import "./estimator.scss";

export const Estimator = () => {
    return (
        <div className="estimator-wrapper">
            <iframe id="typeform-full" width="100%" height="100%" frameBorder="0"
                    allow="camera; microphone; autoplay; encrypted-media;"
                    src="https://form.typeform.com/to/jU0rKa6y?typeform-medium=embed-snippet"/>
            <script type="text/javascript" src="https://embed.typeform.com/embed.js"/>
        </div>
    );
};
