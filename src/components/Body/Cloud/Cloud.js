import React from "react";
import "./styles.scss";

const Cloud = () => {
    return (
        <div className="cloud-section">
            <div className="container-cloud">
                <div className="hosting">
                    <h1>Extreme Cloud Hosting</h1>
                    <p className="cloud-host">Cloud hosting like you've never seen. Fast, efficient and scalable</p>
                    <button className="btn-deploy">Read More</button>
                </div>
                <img src="images/cloud.png" />
            </div>
        </div>
    )
}

export default Cloud;