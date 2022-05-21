import React from 'react';
import style from './SkillSS.module.scss'

export const SkillSS = (props) => {
    return (
        <div className={style.wrapp}>
            <div className={style.skill}>
                <div className={style.icon}></div>
                <h3>{props.title}</h3>
                <span>{props.description}</span>
            </div>
        </div>
    );
};
