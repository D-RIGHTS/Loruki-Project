import React from "react";
import "./styles.scss";

const Cli = () => {
    return (
        <div className="Cli-Section">
            <div className="container-cli">
                <div>
                    <img src="images/cli.png" />
                </div>
                <div>
                    <div className="card">
                        <p className="cli">Easy to use, cross platform CLI</p>
                    </div>
                    <br />
                    <div className="card">
                        <p className="cli">Deploy in seconds</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cli;