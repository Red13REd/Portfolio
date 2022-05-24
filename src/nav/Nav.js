import React from "react";
import style from "./Nav.module.scss"
import {Link, animateScroll as scroll} from "react-scroll"

export const Nav = () => {
    return (
        <div className={style.nav}>
            <Link
                activeClass={style.active}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="main">Main</Link>

            <Link
                activeClass={style.active}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="skills">Skills</Link>

            <Link
                activeClass={style.active}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="projects">Projects</Link>

            <Link
                activeClass={style.active}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="contacts">Contacts</Link>
        </div>
    );
};
