import React from "react";
import "./styles.scss";
import Hero from "./Hero/Hero";
import Stats from "./Stats/Stats";
import Cli from "./Cli/Cli";
import Cloud from "./Cloud/Cloud";
import Languages from "./Languages/Languages";

const Body = () => {
    return (
        <div>
            <Hero />
            <Stats />
            <Cli />
            <Cloud />
            <Languages />

        </div>
    )
}

export default Body;