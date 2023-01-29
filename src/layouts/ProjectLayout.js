import { Helmet, HelmetProvider } from "react-helmet-async";
import ScrollToTop from "react-scroll-to-top";
import PropTypes from "prop-types";
import {useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import SmallNavbar from "../components/NavBar/SmallNavBar";

const ProjectLayout = (props) => {
    const {id} =useParams()
    const isMain = id?false:true
    const categories = ["architecture","<code/>"]

    return (
        <HelmetProvider>
            <ScrollToTop smooth />
            <Helmet
                titleTemplate="%s | Siwa Omondi"
                defaultTitle="Siwa Omondi | Designer | Developer"
                defer={false}
            >
                {props.title && <title>{props.title}</title>}
                <meta
                    property="og:title"
                    content={`Brian Siwa Omondi.${props.ProjectType}`}
                />
                <meta name="og:description" content={props.description} />
                <meta
                    property="og:url"
                    content={`https://siwaomondi.com/${props.subdirectory}`}
                />
                <link
                    rel="canonical"
                    href={`http://siwaomondi.com/${props.subdirectory}`}
                />
            </Helmet>
            <div class="project__page layout__page">
                <SmallNavbar isMain = {isMain} categories={categories}></SmallNavbar>
                <section class="project__content">{props.children}</section>
                <div class="project__footer">
                    <Footer></Footer>
                </div>
            </div>
        </HelmetProvider>
    );
};
ProjectLayout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    fullPage: PropTypes.bool,
    title: PropTypes.string,
    description: PropTypes.string,
};

ProjectLayout.defaultProps = {
    children: null,
    fullPage: false,
    title: null,
    description: "Siwa Omondi's personal website.",
    subdirectory: "",
    route:""
};

export default ProjectLayout;
