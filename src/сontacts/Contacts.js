import React from "react";
import styles from "./Contacts.module.scss"
import {Title} from "../common/components/title/Title";
import Fade from 'react-reveal/Fade';


export const Contacts = () => {
    return (
        <div id="contacts" className={styles.block}>
            <div className={styles.container}>
                <Title title="Contacts"/>
                <Fade>
                    <form className={styles.form} action="">
                        <input name="Name" placeholder="Name" className={styles.input} type="text"/>
                        <input placeholder="Email" className={styles.input} type="text"/>
                        <textarea className={styles.textarea} placeholder="Your message"
                                  id="" cols="30" rows="10"/>
                        <button type="submit" className={styles.button}>Send message</button>
                    </form>
                </Fade>
            </div>
        </div>
    );
};
