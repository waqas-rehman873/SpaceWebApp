import React from "react";
import { Link } from "react-router-dom";

const GuideDefault = () => {
    return (
        <main className="guideSection" id="guideSection">
            <section className="guideScreenBox">
                <article className="guideHead">
                    <h1 className="h1Heading">Welcome to the guide</h1>
                    <hr />
                    <p>
                        We have created this guide to help new and old players find helpful
                        information about how things work in UD in particular and in Space Engineers
                        in general.
                        <br />
                        <br />
                        Navigate between the different topics to find what you are looking for. If
                        there is information missing that would be beneficial to add then make sure
                        to tell us in{" "}
                        <Link to="https://discord.com/invite/space-community-14k-796285912127504435">
                            Discord
                        </Link>
                        .
                    </p>
                </article>
            </section>
        </main>
    );
};

export default GuideDefault;
