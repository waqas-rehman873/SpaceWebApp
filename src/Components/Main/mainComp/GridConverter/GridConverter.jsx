import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import grid1 from "../../../../assets/pics/grid1.jpg";
import grid2 from "../../../../assets/pics/grid2.jpg";
import grid3 from "../../../../assets/pics/grid3.jpg";
import grid4 from "../../../../assets/pics/grid4.jpg";
import grid5 from "../../../../assets/pics/grid5.jpg";

const GridConverter = () => {
    const images = [
        {
            original: grid1,
            thumbnail: grid1,
        },
        {
            original: grid2,
            thumbnail: grid2,
        },
        {
            original: grid3,
            thumbnail: grid3,
        },
        {
            original: grid4,
            thumbnail: grid4,
        },
        {
            original: grid5,
            thumbnail: grid5,
        },
    ];

    return (
        <section className="bgSection">
            <section className="secondScreenBox">
                <article className="locationHead">
                    <h1 className="h1Heading">Upside Down Grid Converter v1.64</h1>
                    <p>
                        From our very own, almost sane, mad scientist [M] Dr.Foldingue comes a
                        unique tool to not only convert your grids in any imaginable way, but to
                        also get lots of useful information.
                        <br /> <br />
                        Windows displays a warning when opening the program. Fear not, it is 100%
                        safe and there is no reason to worry. Ask admins or other players if there
                        are any concerns.
                        <br /> Any bugs are to be reported in #report-bug in UD discord
                        <br /> <br />
                        <b>Features</b>
                        <br />
                        Grid size conversion (large/small grid) <br />
                        UD block tier conversion
                        <br /> Components cost calculation <br />
                        Grid weight, thrust power, acceleration, and much more!
                    </p>
                </article>
                <section className="gridSection">
                    <button className="downloadBtn">Download</button>
                    <ImageGallery items={images} />
                </section>
            </section>
        </section>
    );
};

export default GridConverter;
