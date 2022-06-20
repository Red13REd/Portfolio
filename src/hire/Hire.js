import React from 'react';
import styles from './hire.module.scss'
import {Title} from "../common/components/title/Title";
import {Link} from "react-scroll";


export const Hire = () => {
    return (
        <div className={styles.Block}>
            <div className={styles.container}>
                <Title title="I Am Available For Freelancer"/>
                <Link
                    className={styles.button}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="contacts">
                    Hire me
                </Link>
            </div>
        </div>
    );
};
