import React from "react";
import style from "./Contacts.module.scss"
import {Title} from "../common/components/title/Title";


export const Contacts = () => {
    return (
        <div id="contacts" className={style.block}>
            <div className={style.container}>
                <Title title="Contacts"/>
                <form className={style.form} action="">
                    <input name="Name" placeholder="Name" className={style.input} type="text"/>
                    <input placeholder="Email" className={style.input} type="text"/>
                    <textarea className={style.textarea} placeholder="Your message"
                              id="" cols="30" rows="10"/>
                    <button type="submit" className={style.button}>Отправить</button>
                </form>
            </div>
        </div>
    );
};
