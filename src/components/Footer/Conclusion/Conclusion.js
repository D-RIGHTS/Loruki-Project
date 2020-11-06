import React from "react";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Conclusion = () => {
    return (
        <div className="Conclusion">
          <div className="container-footer">
              <div className="trademark">
                  <h1>Loruki</h1>
                  <br />
                  <br />
                  <p>Copyright &copy; 2020</p>
              </div>
              <div className="links-footer">
                  <ul>
                      <li>Home</li>
                      <br />
                      <li>Features</li>
                      <br />
                      <li>Docs</li>
                  </ul>
              </div>
              <div className="icons-footer">
                  <div className="font-div"><FontAwesomeIcon icon={faGithub} size="2x" /></div>
                  <div className="font-div"><FontAwesomeIcon icon={faFacebook} size="2x" /></div>
                  <div className="font-div"><FontAwesomeIcon icon={faInstagram} size="2x" /></div>
                  <div className="font-div"><FontAwesomeIcon icon={faTwitter} size="2x" /></div>
              </div>
          </div>

        </div>
    )
}

export default Conclusion;
