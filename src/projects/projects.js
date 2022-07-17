import React from 'react';
import styles from './projects.module.scss'
import {Project} from "./project/project";
import {Title} from "../common/components/title/Title";
import one from "../assets/image/one.png"
import two from "../assets/image/two.jfif"
import counter from "../assets/image/counter.jpg"
import cards from "../assets/image/cards.jpg"
import Fade from 'react-reveal/Fade';

const projects = [
    {
        title: "Social network",
        description:
            "TypeScript, React, Redux Toolkit, Redux-thunk, Router-dom, " +
            "Axios, Mui for some component, SCSS, Formik; Bug fixing, deploying.",
        hrefCode: "https://github.com/Red13REd/SocialNetwork",
        href: "https://github.com/Red13REd/SocialNetwork",
        style: {
            backgroundImage: `url(${one})`,
        }
    },
    {
        title: "To Do List",
        description:
            "TypeScript, React, Redux Toolkit, Redux-thunk, Router-dom, " +
            "Axios, Mui, Formik, Storybook; Bug fixing, deploying;" +
            " Covering code with unit tests.",
        hrefCode: "https://github.com/Red13REd/Todolist",
        href: "https://red13red.github.io/todolist/#/login",
        style: {
            backgroundImage: `url(${two})`,
        }
    },
    {
        title: "Counter",
        description:
            "My first project with React/Redux/TS. I left It here as a memory.",
        hrefCode: "https://github.com/Red13REd/Counter",
        href: "https://red13red.github.io/Counter/",
        style: {
            backgroundImage: `url(${counter})`,
        }
    },
    {
        title: "Cards study",
        description:
            "TypeScript, React, Redux, Redux-thunk, Router-dom," +
            " Axios,  SCSS; Team development; Bug fixing, deploying.",
        hrefCode: "https://github.com/TonyFinder/Cards-study",
        href: "https://tonyfinder.github.io/Cards-study/#/login",
        style: {
            backgroundImage: `url(${cards})`,
        }
    },
]


export const Projects = () => {
    return (
        <div id="projects" className={styles.projectsBlock}>
            <div className={styles.container}>
                <Title title="Projects"/>
                <Fade>
                    <div className={styles.projects}>
                        {projects.map((m, i) => {
                            return <Project
                                key={i}
                                title={m.title}
                                description={m.description}
                                style={m.style}
                                href={m.href}
                                hrefCode={m.hrefCode}
                            />
                        })}
                    </div>
                </Fade>
            </div>
        </div>
    );
};
