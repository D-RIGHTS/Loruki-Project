import React from "react";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServer } from "@fortawesome/free-solid-svg-icons";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { faProjectDiagram } from "@fortawesome/free-solid-svg-icons";

const Stats = () => {
    return(
        <div className="stats-main-div">
            <section className="stats">
                <div className="container-stats">
                    <h3>
                        Welcome to the best platform for building applications of all types with modern architecture and scaling
                    </h3>
                    <div className="font-awesome">
                        <div>
                            <FontAwesomeIcon icon={faServer} />
                            <h6>1,652,374</h6>
                            <p className="font">Deployments</p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faUpload} />
                            <h6>624GB</h6>
                            <p className="font">Published</p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faProjectDiagram} />
                            <h6>728 296</h6>
                            <p className="font">Projects</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Stats;