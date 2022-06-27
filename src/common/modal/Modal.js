import React from 'react';
import styles from './modal.module.scss'


export const Modal = (props) => {

    if (!props.show) return null

    return (
        <>
            <div className={styles.modalBackground} onClick={props.backgroundOnClick}/>
            <div className={styles.modal}>
                {props.children}
            </div>
        </>
    )
}