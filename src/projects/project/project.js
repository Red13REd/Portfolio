import React from "react";
import style from "./project.module.scss";

export const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.image} style={props.style}>
                <a className={style.button} href="">Смотреть</a>
            </div>
            <div className={style.textInfo}>
                <h6 className={style.title}>{props.title}</h6>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    );
};
