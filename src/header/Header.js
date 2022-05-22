import style from './Header.module.scss'
import {Nav} from "../nav/Nav";
import {useEffect} from "react";

export const Header = () => {

    let color = style.header
    const handleScroll = () => {
        if (Window.pageYOffset > 50) color = style.header2
        else color = style.header
    }


    useEffect(() => {
        window.addEventListener('scroll', handleScroll, true);

        // Remove the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll, true);
        };
    }, []);

    return (
        <div id="header" className={color}>
            <div className={style.container}>
                {/*<div className={style.logo}>LOGO</div>*/}
                <Nav/>
            </div>
        </div>
    );
}
