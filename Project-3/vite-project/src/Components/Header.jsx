import React from "react";

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src="../Public/Troll Face.png" alt="Troll Face" loading="lazy" className="icon"/>
                MEMEGENERATOR
            </div>
            <div className="about">
                Project-3 (React)
            </div>
        </header>
    );
}
export default Header;