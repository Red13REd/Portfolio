import React from "react";
import styles from "./project.module.scss";

export const Project = (props) => {
    return (
        <div className={styles.project}>
            <div className={styles.image} style={props.style}>
                <a className={styles.button} target="_blank" href={props.href}>Watch</a>
            </div>
            <div className={styles.textInfo}>
                <h6 className={styles.title}>{props.title}</h6>
                <span className={styles.description}>{props.description}</span>
                <a target="_blank" href={props.hrefCode}>Code</a>
            </div>
        </div>
    );
};
