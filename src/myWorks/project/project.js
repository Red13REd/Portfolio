import React from 'react';
import style from "./project.module.css";

export const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.icon}>
                <a className={style.button} href="">Смотреть</a>
            </div>
            <div className={style.text}>
                <span className={style.title}>{props.title}</span>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    );
};
