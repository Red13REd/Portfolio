import React from 'react';
import style from './main.module.css'
import styleContainer from '../common/style/Container.module.css'

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
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
