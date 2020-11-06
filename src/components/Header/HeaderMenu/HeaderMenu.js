import React from "react";
import "./styles.scss";

const HeaderMenu = () => {
    return (
        <div className="HeaderMenu">
            <div className="container-menu">
                <div className="logo">Loruki</div>
                <nav>
                    <ul className="NavMenu">
                        <li>Home</li>
                        <li>Features</li>
                        <li>Docs</li>
                    </ul>
                </nav>

            </div>
        </div>
    )
}

export default HeaderMenu;