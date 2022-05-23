import React from 'react';
import style from './Skills.module.scss'
import {Skill} from "./Skill/Skill";
import {Title} from "../common/components/title/Title";

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
        <div id="skills" className={style.skillsBlock}>
            <div className={style.skillsContainer}>
                <Title title="Skills"/>
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

