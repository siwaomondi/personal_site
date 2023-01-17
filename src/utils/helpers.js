import { APPS } from "./constants";

const getApp = () => {
    const subdomain = getSubDomain();

    let app;
    switch (subdomain) {
        case "":
            app = APPS.main;
            break;
        case process.env.REACT_APP_CUCYVIBVNKFD:
            app = APPS.admin;
            break;
        default:
            app = APPS.main;

    }
    return app.app;
    // console.log(window.location.hostname);
};

const getSubDomain = () => {
    const location = window.location.hostname;
    const parts = location.split(".");
    const isLocalHost = parts.slice(-1)[0] === "localhost";
    let sliceTill = isLocalHost ? -1 : -2;
    const subDom = parts.slice(0, sliceTill).join("");

    return subDom;
};

export { getApp, getSubDomain };
