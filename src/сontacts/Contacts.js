import React from "react";
import styles from "./Contacts.module.scss"
import {Title} from "../common/components/title/Title";
import Fade from 'react-reveal/Fade';
import axios from "axios";
import {useFormik} from "formik";


export const Contacts = () => {

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: "",
        },
        validate: (values) => {
            const errors = {}
            if (!values.email) {
                errors.email = 'Email is required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.name) {
                errors.name = 'Name is required'
            }
            if (!values.message) {
                errors.message = 'Message is required'
            }
            return errors;
        },

        onSubmit: values => {
            onSubmitForm(values.name, values.email, values.message)
            formik.resetForm()
        },
    })


    const onSubmitForm = (name, email, message) => {
        axios.post("https://smtp-nodejs-server-for.herokuapp.com/sendMessage", {name, email, message})
            .then(() => {
                alert("Sent")
            })

    }

    let disableBtn = formik.errors.email || formik.errors.name || formik.errors.message

    return (
        <div id="contacts" className={styles.block}>
            <div className={styles.container}>
                <Title title="Contacts"/>
                <Fade>
                    <form onSubmit={formik.handleSubmit} className={styles.form}>
                        <input
                            id='Name'
                            name="Name"
                            placeholder="Name"
                            className={styles.input}
                            type="text"
                            {...formik.getFieldProps('name')}
                        />
                        <div className={styles.errorDiv}>
                            {formik.touched.name && formik.errors.name ? formik.errors.name : null}
                        < /div>
                        <input
                            id='Email'
                            placeholder="Email"
                            className={styles.input}
                            type="text"
                            {...formik.getFieldProps('email')}
                        />
                        <div className={styles.errorDiv}>
                            {formik.touched.email && formik.errors.email ? formik.errors.email : null}
                        < /div>
                        <textarea
                            className={styles.textarea}
                            placeholder="Your message"
                            id="" cols="30" rows="10"
                            {...formik.getFieldProps('message')}
                        />
                        <div className={styles.errorDiv}>
                            {formik.touched.message && formik.errors.message ? formik.errors.message : null}
                        < /div>
                        <button disabled={!!disableBtn} type="submit" className={styles.button}>Send message</button>
                    </form>
                </Fade>
            </div>
        </div>
    );
};
