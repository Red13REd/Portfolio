import React from "react";
import style from "./burgerNav.module.scss"
import {Link} from "react-scroll"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

export const BurgerNav = (props) => {
    return (
        <div className={style.burgerNav}>
            <div className={props.isOpenMenu ? `${style.burgerNavItems} ${style.show}` : style.burgerNavItems}>
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
            <div onClick={props.openMenuHandler} className={style.burgerBTN}>
                <FontAwesomeIcon color="white" size="2x" icon={faBars}/>
            </div>
        </div>
    );
};
