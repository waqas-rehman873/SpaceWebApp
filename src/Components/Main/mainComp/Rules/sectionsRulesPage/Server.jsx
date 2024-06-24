import React from "react";

const Server = () => {
    return (
        <article className="serverSection" id="ServerRestart">
            <h1>Server restart</h1>
            <hr />
            <p>
                We have scheduled server restarts to maintain a stable sim speed on the server. The
                restarts occur four times per day, every 6th hour. Server restarts at the following
                time CET:
            </p>
            <p>
                <string>00:00 • 06:00 • 12:00 • 18:00</string>
            </p>
        </article>
    );
};

export default Server;
