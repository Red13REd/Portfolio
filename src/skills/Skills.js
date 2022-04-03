import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../common/style/Container.module.css'
import {Skill} from "./Skill/Skill";

export const Skills = () => {

    const skills = [
        {
            title: "JS", description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            img: ""
        },
        {
            title: "CSS", description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
                " Morbi pellentesque felis dignissim nibh ullamcorper tempus. " +
                "Quisque eget ante sollicitudin, efficitur.",
            img: ""
        },
        {
            title: "React", description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                "Morbi pellentesque felis dignissim nibh ullamcorper tempus. ",
            img: ""
        },
    ]


    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    {skills.map((m, i) => {
                        return <Skill
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

