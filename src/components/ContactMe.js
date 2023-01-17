import React from "react";
import "./css/ContactMe.css";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Alert, AlertTitle, Collapse } from "@mui/material";

const ContactMe = () => {
    const [open, setOpen] = useState(false);
    const form = useRef();
    const processEmail = (cform) => {
        const messages = {
            success: {
                severity: "success",
                title: "Success",
                message:
                    "You message has been sent — I will get back to you as soon as possible",
            },
            connectionError: {
                severity: "error",
                title: "Error",
                message:
                    "Message not sent. Kindly check your connection and try again",
            },
        };
        const alertPopup = (responseType) => {
            let m = messages[responseType];
            return (
                <Alert severity={m.severity}>
                    <AlertTitle>{m.title}</AlertTitle>
                    {m.message}
                </Alert>
            );
        };
        emailjs
            .sendForm(
                "personal_website_mails",
                "personal_website_temp",
                form.current,
                "Mjsybyp1Z-RjmJwPY"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    cform.target.reset();
                    <Alert onClose={() => {}} severity="success">
                        <AlertTitle>success</AlertTitle>
                        success
                    </Alert>;
                    // alertPopup("success");
                },
                (error) => {
                    console.log(error.text);
                    alertPopup("connectionError");
                }
            );
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setTimeout(() => {
            processEmail(e);
        }, 2000);
    };

    return (
        <section id="contactMe" style={{ transition: "1.5s" }}>
            <button
                style={{ marginBottom: "2rem" }}
                // disabled={open}
                class="contact-btn"
                onClick={() => {
                    setOpen(!open);
                }}
            >
                <span>say hi </span>
            </button>
            <Collapse in={open} timeout={2000}>
                <div className="form__section">
                    <form id="contact__form" ref={form} onSubmit={sendEmail}>
                        <input
                            type="text"
                            maxlength="256"
                            name="user_name"
                            data-name="Name"
                            placeholder="Who am i interacting with?"
                            id="name"
                            required=""
                            class="contact_field"
                        />
                        <input
                            type="email"
                            maxlength="256"
                            name="user_email"
                            data-name="Contact"
                            placeholder="What's your email?"
                            id="Contact"
                            required={true}
                            class="contact_field"
                        />
                        <textarea
                            maxlength="5000"
                            id="field"
                            name="message"
                            placeholder="Your message and ideas here"
                            data-name="field"
                            class="contact_field"
                            required={true}
                            rows="4"
                        ></textarea>
                        <input
                            type="submit"
                            value="SUBMIT"
                            data-wait="Please wait..."
                            class="contact-form---submit-button w-button"
                        />
                    </form>
                </div>
            </Collapse>
        </section>
    );
};

export default ContactMe;
