import React from "react";

const CelestialBodyInfo = ({
    bgImg,
    bodyImg,
    bodyName,
    textParagraph,
    gravityDes,
    altitudeDes,
    isStation,
}) => {
    const locationClassName = `location ${isStation && !bodyImg ? "zoomBgImg" : "zoomStation"}`;

    const imgInnerClassName = bodyImg ? (isStation ? "innerImgStation" : "innerImg") : "";

    return (
        <div className={locationClassName} style={{ backgroundImage: `url(${bgImg})` }}>
            {bodyImg && (
                <figure>
                    <img className={imgInnerClassName} src={bodyImg} alt={bodyName} />
                </figure>
            )}
            <div className="textDiv">
                <h4>{bodyName}</h4>
                <p>{textParagraph}</p>
                {gravityDes && <span>{gravityDes}</span>}
                {altitudeDes && <span>{altitudeDes}</span>}
            </div>
        </div>
    );
};

export default CelestialBodyInfo;
