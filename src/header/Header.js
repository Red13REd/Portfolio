import style from './Header.module.scss'
import {Nav} from "../nav/Nav";
import {useEffect} from "react";

export const Header = () => {

    /*const handleScroll = () => {
        console.log('Scrolling...');
    };


    useEffect(() => {
        window.addEventListener('scroll', handleScroll, true);

        // Remove the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll, true);
        };
    }, []);*/

    return (
        <div id="header" className={style.header}>
            <div className={style.container}>
                {/*<div className={style.logo}>LOGO</div>*/}
                <Nav/>
            </div>
        </div>
    );
}
