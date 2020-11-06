import React from "react";
import "./styles.scss";

const Languages = () => {
    return (
        <div className="Languages">
            <div className="container-languages">
                <h2>Supported Languages</h2>
                <div className="language-sel">
                    <div className="card">
                        <h6>Node.js</h6>
                        <img src="images/node.png" alt=""/>
                    </div>
                    <div className="card">
                        <h6>Python</h6>
                        <img src="images/python.png" alt=""/>
                    </div>
                    <div className="card">
                        <h6>C#</h6>
                        <img src="images/csharp.png" alt=""/>
                    </div>
                    <div className="card">
                        <h6>Ruby</h6>
                        <img src="images/ruby.png" alt=""/>
                    </div>
                    <div className="card">
                        <h6>PHP</h6>
                        <img src="images/php.png" alt=""/>
                    </div>
                    <div className="card">
                        <h6>Scala</h6>
                        <img src="images/scala.png" alt=""/>
                    </div>
                    <div className="card">
                        <h6>Clojure</h6>
                        <img src="images/clojure.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Languages;