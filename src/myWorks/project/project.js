import React from 'react';
import style from "./project.module.css";

export const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.icon}>
                <button className={style.button}>Смотреть</button>
            </div>
            <div className={style.text}>
                <span>{props.title}</span>
                <span>{props.description}</span>
            </div>
        </div>
    );
};
