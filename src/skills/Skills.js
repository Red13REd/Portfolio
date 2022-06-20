import React from 'react';
import styles from './Skills.module.scss'
import {Skill} from "./Skill/Skill";
import {Title} from "../common/components/title/Title";
import {faReact} from "@fortawesome/free-brands-svg-icons";
import {faJs} from "@fortawesome/free-brands-svg-icons";
import {faCss3} from "@fortawesome/free-brands-svg-icons";
import Fade from 'react-reveal/Fade';
import {faCode} from "@fortawesome/free-solid-svg-icons";


const skills = [
    {
        title: "JS", description:
            "I use JavaScript with TypeScript.",
        img: "",
        icon: faJs,
    },
    {
        title: "CSS", description:
            "Layout: HTML5, CSS3, Scss, Mui",
        img: "",
        icon: faCss3,
    },
    {
        title: "React", description:
            "I prefer to use React in conjunction with Redux (Toolkit). Redux-Thunk",
        img: "",
        icon: faReact,
    },
    {
        title: "Also", description:
            "Axios, REST API, Unit Tests (Jest), Storybook, Git",
        img: "",
        icon: faCode,
    },
]

export const Skills = () => {
    return (
        <div id="skills" className={styles.skillsBlock}>
            <div className={styles.skillsContainer}>
                <Title title="Skills"/>
                <Fade>
                    <div className={styles.skills}>
                        {skills.map((m, i) => {
                            return <Skill
                                key={i}
                                title={m.title}
                                description={m.description}
                                img={m.img}
                                icon={m.icon}
                            />
                        })}
                    </div>
                </Fade>
            </div>
        </div>
    );
};

