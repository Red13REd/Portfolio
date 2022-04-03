import React from 'react';
import style from './telework.module.css'
import styleContainer from '../common/style/Container.module.css'


export const Telework = () => {
    return (
        <div className={style.Block}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h2>Рассматриваю варианты удаленной работы</h2>
                <button className={style.button}>Нанять меня</button>
            </div>
        </div>
    );
};
