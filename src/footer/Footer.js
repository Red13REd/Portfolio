import React from 'react';
import style from './Footer.module.scss'
import {Title} from "../common/components/title/Title";

export const Footer = () => {
    return (
        <div className={style.block}>
            <div className={style.container}>
                <Title title="User Name"/>
                <div className={style.footerBlock}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <span className={style.text}>@2022 Все права защищены </span>
            </div>
        </div>
    );
};
