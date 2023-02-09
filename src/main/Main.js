import React from 'react';
import styles from './main.module.scss'
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'

const particlesOptions = {
    style: {
        position: "absolute"
    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 150,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#ffffff",
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1
        },
        collisions: {
            enable: true,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.3,
        },
        shape: {
            type: "angular",
        },
        size: {
            value: {min: 1, max: 5},
        },
    },
    detectRetina: true,
}

export const Main = () => {
    return (
        <div id="main" className={styles.mainBlock}>
            <Particles
                init={loadFull}
                options={particlesOptions}
                canvasClassName={styles.particles}
                className={styles.particles}
            />
            <Fade top>
                <div className={styles.container}>
                    <div className={styles.text}>
                        <span>Hi There</span>
                        <span>2I am Vadim <span>Chernyavskiy</span> </span>
                        <ReactTypingEffect
                            speed={250}
                            typingDelay={1000}
                            text="Fronted Developer"
                        />
                    </div>
                    <Tilt className="Tilt" options={{max: 25}}>
                        <div className={styles.photo}>
                            <div className={styles.image}>

                            </div>
                        </div>
                    </Tilt>
                </div>
            </Fade>
        </div>
    );
};
