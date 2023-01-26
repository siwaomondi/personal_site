import React, {} from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
// import "../static/css/notFound.css";
import Main from "../layouts/Main";
import NotFoundLayout from "../layouts/NotFoundLayout";

const NotFoundComponent = (props) => {
    return (
        <NotFoundLayout>
            <div className="notFound">
                <h2>Unaenda wapi huko😂rudi nyuma</h2>
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>
                    Return <Link to="/">home</Link>. 
                </p>
            </div>
        </NotFoundLayout>
    );
};

export default NotFoundComponent;
