import React from 'react';
import styles from './Footer.module.scss'
import {Title} from "../common/components/title/Title";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin, faTelegram} from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
    return (
        <div className={styles.block}>
            <div className={styles.container}>
                <Title title="Get in touch"/>
                <div className={styles.footerBlock}>
                    <div>
                        <a href="https://github.com/Red13REd" target="_blank">
                            <FontAwesomeIcon color={"white"} size={"2x"} icon={faGithub}/>
                        </a>
                    </div>
                    <div>
                        <a href="https://t.me/ThirteenEleven" target="_blank">
                            <FontAwesomeIcon color={"white"} size={"2x"} icon={faTelegram}/>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/vadimchernyavskiy-9b033b237/" target="_blank">
                            <FontAwesomeIcon color={"white"} size={"2x"} icon={faLinkedin}/>
                        </a>
                    </div>
                </div>
                <span className={styles.text}>© 2022 All rights reserved </span>
            </div>
        </div>
    );
};
