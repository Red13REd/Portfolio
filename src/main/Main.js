import React from 'react';
import style from './main.module.scss'

export const Main = () => {
    return (
        <div id="main" className={style.mainBlock}>
            <div className={style.container}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>I am User Name</h1>
                    <p>Fronted Developer</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
};
