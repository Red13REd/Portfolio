import React from 'react';
import styles from './hire.module.scss'
import {Title} from "../common/components/title/Title";
import {ModalForm} from "../common/modal/ModalForm";


export const Hire = () => {
    return (
        <div className={styles.Block}>
            <div className={styles.container}>
                <Title title="I Am Available For Freelancer"/>
                <ModalForm/>
            </div>
        </div>
    );
};
