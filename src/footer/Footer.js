import React from 'react';
import style from './Footer.module.css'
import styleContainer from '../common/style/Container.module.css'

export const Footer = () => {
    return (
        <div className={style.block}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h2 className={style.title}>User Name</h2>
                <div className={style.footerBlock}>
                    <div className={style.minBlock}></div>
                    <div className={style.minBlock}></div>
                    <div className={style.minBlock}></div>
                    <div className={style.minBlock}></div>
                </div>
                <span className={style.text}>@2022 Все права защищены </span>
            </div>
        </div>
    );
};
