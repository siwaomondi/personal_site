import { AppRouter, AdminRouter } from "../routers/index";
export const APPS = {
    main: {
        subdomain: "www",
        app: AppRouter,
        main: true,
    },
    admin: {
        subdomain: "admin",
        app: AdminRouter,
        main: false,
    },
};
