import React from 'react';
import style from './Footer.module.scss'
import {Title} from "../common/components/title/Title";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faLinkedin, faTelegram} from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
    return (
        <div className={style.block}>
            <div className={style.container}>
                <Title title="User Name"/>
                <div className={style.footerBlock}>
                    <div>
                        <FontAwesomeIcon  color={"white"} size={"2x"} icon={faInstagram}/>
                    </div>
                    <div>
                        <FontAwesomeIcon color={"white"} size={"2x"} icon={faFacebook}/>
                    </div>
                    <div>
                        <FontAwesomeIcon color={"white"} size={"2x"} icon={faTelegram}/>
                    </div>
                    <div>
                        <FontAwesomeIcon color={"white"} size={"2x"} icon={faLinkedin}/>
                    </div>
                </div>
                <span className={style.text}>@2022 Все права защищены </span>
            </div>
        </div>
    );
};
