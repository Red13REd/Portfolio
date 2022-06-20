import styles from "./Header.module.scss";
import {Nav} from "./nav/Nav";
import {useEffect, useState} from "react";
import {BurgerNav} from "./burgerNav/BurgerNav";

export const Header = () => {

    const [styleHeader, SetStyleHeader] = useState(false)
    const [isOpenMenu, setIsOpenMenu] = useState(false)

    const onClickOpenMenuHandler = () => {
        setIsOpenMenu(!isOpenMenu)
    }

    const changeBackground = () => {
        if (window.scrollY > 50) SetStyleHeader(true)
        else SetStyleHeader(false)
    }

    window.addEventListener('scroll', changeBackground);

    useEffect(() => {
        changeBackground()
    }, []);

    let headerClassName = isOpenMenu ?
        (styleHeader ? styles.headerActiveBurger : styles.headerBurger)
        : (styleHeader ? styles.headerActive : styles.header)

    return (
        <div id="header"
             className={headerClassName}>

            <div className={styles.container}>
                {/*<div className={style.logo}>LOGO</div>*/}
                <Nav/>
                <BurgerNav openMenuHandler={onClickOpenMenuHandler} isOpenMenu={isOpenMenu}/>
            </div>
        </div>
    );
}
