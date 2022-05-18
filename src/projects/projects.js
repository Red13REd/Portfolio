import React from 'react';
import style from './projects.module.scss'
import {Project} from "./project/project";
import {Title} from "../common/components/title/Title";
import one from "../assets/image/one.png"
import two from "../assets/image/two.jfif"


export const Projects = () => {

    const projects = [
        {
            title: "My First Project",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            style: {
                color: 'blue',
                backgroundImage: `url(${one})`,
            }
        },
        {
            title: "My Second Project",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            style: {
                color: 'blue',
                backgroundImage: `url(${two})`,
            }
        },
    ]

    const todoStyle = {
        color: 'blue',
        backgroundImage: 'url(' + "../assets/image/one.png" + ')',
    };

    const socialStyle = {
        color: 'blue',
        backgroundImage: 'url(' + "../assets/image/two.jfif" + ')',
    };

    return (
        <div className={style.projectsBlock}>
            <div className={style.container}>
                <Title title="Projects"/>
                <div className={style.projects}>
                    {projects.map((m, i) => {
                        return <Project
                            key={i}
                            title={m.title}
                            description={m.description}
                            style={m.style}
                        />
                    })}
                </div>
            </div>
        </div>
    );
};
