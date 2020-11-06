import React from "react";
import "./styles.scss";

const Hero = () => {
    return (
        <div>
        <section className="hero">
            <div className="container-hero">
                <div className="deployment">
                    <h1>Easier Deployment</h1>
                    <p>Deploy web apps of all kinds, from large scale enterprise APIs to static websites for individuals. Fill out the form to try a demo of our platform</p>
                    <button className="btn-deploy">Learn More</button>
                </div>

                <div className="showcase-form card">
                    <h4>Request a Demo</h4>
                    <form>
                        <div className="form-control">
                            <input type="text" name="name" placeholder="Enter your Name:" required/>
                        </div>
                        <div className="form-control">
                            <input type="text" name="Company Name" placeholder="Company Name:" required/>
                        </div>
                        <div className="form-control">
                            <input type="email" placeholder="Type your email here:" required/>
                        </div>
                        <input className="btn" type="submit" placeholder="Request a Demo"/>
                    </form>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Hero;