import React from 'react';
import style from './hire.module.scss'
import {Title} from "../common/components/title/Title";


export const Hire = () => {
    return (
        <div className={style.Block}>
            <div className={style.container}>
                <Title title="I Am Available For Freelancer"/>
                <button className={style.button}>Hire me</button>
            </div>
        </div>
    );
};
