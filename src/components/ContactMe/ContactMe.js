import React from "react";
import "../../static/css/ContactMe.css";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Alert, AlertTitle, Collapse, Dialog } from "@mui/material";

import Box from "@mui/joy/Box";
// import Alert from "@mui/joy/Alert";
import ReportIcon from "@mui/icons-material/Report";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import AlertComponent from "./AlertComponent";

const ContactMe = () => {
    const [open, setOpen] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [btnTxt, setBtnText] = useState("SEND");
    const [sender, setSender] = useState("");
    const [popup, setPopup] = useState({});
    const [error, setError] = useState("");
    const form = useRef();
    const messages = {
        success: {
            icon: <CheckCircleIcon />,
            color: "success",
            severity: "success",
            title: "Success",
            message: `Thank you ${sender} — I will get back to you as soon as possible`,
        },
        genericError: {
            icon: <ReportIcon />,
            color: "danger",
            severity: "error",
            title: "Error",
            message: `${error}. Try again later`,
        },
        connectionError: {
            icon: <ReportIcon />,
            color: "danger",
            severity: "error",
            title: "Error",
            message: "Check your Internet connection and try again",
        },
    };
    const handleDialog = () => {
        setDialogOpen(!dialogOpen);
        console.log(dialogOpen);
    };
    const processEmail = (cform) => {
        emailjs
            .sendForm(
                "personal_website_mails",
                "personal_website_temp",
                form.current,
                "Mjsybyp1Z-RjmJwPY"
            )
            .then(
                (result) => {
                    cform.target.reset();
                    setOpen(!open);
                    setPopup(messages.success)
                    handleDialog()
                },
                (error) => {
                    console.log(error.text);
                    setError(error.text)
                    setPopup(messages.genericError)
                    handleDialog()
                }
            );
        setSender("");
        setError("")
    };
    const handleChange = (e) => {
        setSender(e.target.value);
    };
    const sendEmail = (e) => {
        e.preventDefault();
        setBtnText("SENDING MESSAGE....");

        function delay(time) {
            return new Promise((resolve) => setTimeout(resolve, time));
        }

        delay(1000).then(() => {
            if (navigator.onLine) {
                delay(2000).then(() => {
                    processEmail(e);
                });
            } else {
                setPopup(messages.connectionError);
                handleDialog();
            }
            setBtnText("SEND");
        });
    };
    return (
        <section id="contactMe" style={{ transition: "1.5s" }}>
            <button
                style={{ marginBottom: "2rem" }}
                class="contact-btn"
                onClick={() => {
                    setOpen(!open);
                }}
            >
                <span>say hi/tuma salamu </span>
            </button>
            <Dialog open={dialogOpen} onClose={handleDialog}>
                <Alert severity={popup.severity} onClose={handleDialog}>
                    <AlertTitle>{popup.title}</AlertTitle>
                    {popup.message}
                </Alert>
            </Dialog>
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
                            required={true}
                            class="contact_field"
                            onChange={handleChange}
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
                            value={btnTxt}
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
