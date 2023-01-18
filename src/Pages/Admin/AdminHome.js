import React from "react";

import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import Main from "../../layouts/Main";
const AdminHome = () => {
    return (
        <Main title="Admin" description="Admin">
            <h1>Admin Home works</h1>
        </Main>
    );
};

export default AdminHome;
