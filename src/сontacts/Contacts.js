import React from 'react';
import style from './Contacts.module.css'
import styleContainer from '../common/style/Container.module.css'


export const Contacts = () => {
    return (
        <div className={style.block}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h2 className={style.title}>Контакты</h2>
                <form className={style.form} action="">
                    <input className={style.input} type="text"/>
                    <input className={style.input} type="text"/>
                    <textarea className={style.textarea} name="" id="" cols="30" rows="10"></textarea>
                </form>
                <button className={style.button}>Отправить</button>
            </div>
        </div>
    );
};
