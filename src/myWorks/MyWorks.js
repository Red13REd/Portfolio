import React from 'react';
import style from './myWorks.module.css'
import styleContainer from '../common/style/Container.module.css'
import {Project} from "./project/project";

export const MyWorks = () => {

    const projects = [
        {
            title: "My First Project", description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            img: "",
        },
        {
            title: "My Second Project", description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            img: "",
        },
    ]

    return (
        <div className={style.myWorksBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h2 className={style.title}>Мои Работы</h2>
                <div className={style.projects}>
                    {projects.map((m, i) => {
                        return <Project
                            key={i}
                            title={m.title}
                            description={m.description}
                            img={m.img}
                        />
                    })}
                </div>
            </div>
        </div>
    );
};
