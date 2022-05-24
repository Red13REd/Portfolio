import style from "./Header.module.scss";
import {Nav} from "../nav/Nav";
import {useEffect, useState} from "react";

export const Header = () => {

    const [styleHeader, SetStyleHeader] = useState(false)

    const changeBackground = () => {
        if (window.scrollY > 50) SetStyleHeader(true)
        else SetStyleHeader(false)
    }
    window.addEventListener('scroll', changeBackground);

    useEffect(() => {
        changeBackground()
    }, []);

    return (
        <div id="header" className={styleHeader ? style.headerActive : style.header}>
            <div className={style.container}>
                {/*<div className={style.logo}>LOGO</div>*/}
                <Nav/>
            </div>
        </div>
    );
}
