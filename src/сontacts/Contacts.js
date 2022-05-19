import React from 'react';
import style from './Contacts.module.scss'


export const Contacts = () => {
    return (
        <div className={style.block}>
            <div className={style.container}>
                <h2>Контакты</h2>
                <form className={style.form} action="">
                    <input className={style.input} type="text"/>
                    <input className={style.input} type="text"/>
                    <textarea className={style.textarea} name="" id="" cols="30" rows="10"></textarea>
                </form>
                <button type="submit" className={style.button}>Отправить</button>
            </div>
        </div>
    );
};
