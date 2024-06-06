import React from "react";

const Videobox = () => {
    return (
        <section className="videoContainer">
            <div className="video">
                {" "}
                <iframe
                    class=""
                    title="Video"
                    src="https://www.youtube.com/embed/d_ggVXeU99k?&amp;autoplay=1&amp;mute=1"
                    frameborder="1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen=""
                ></iframe>
            </div>
        </section>
    );
};

export default Videobox;
