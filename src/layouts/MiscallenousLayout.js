import { Helmet, HelmetProvider } from "react-helmet-async";
import ScrollToTop from "react-scroll-to-top";
import PropTypes from "prop-types";

const MiscallenousLayout = (props) => {
    return (
        <HelmetProvider>
            <Helmet
                titleTemplate="%s | Siwa Omondi"
                defaultTitle="Siwa Omondi | Designer | Developer"
                defer={false}
            >
                {props.title && <title>{props.title}</title>}
                <meta
                    property="og:title"
                    content="Siwa. Software Developer | Architectural Designer"
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
            {props.children}
        </HelmetProvider>
    );
};

MiscallenousLayout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    fullPage: PropTypes.bool,
    title: PropTypes.string,
    description: PropTypes.string,
};

MiscallenousLayout.defaultProps = {
    children: null,
    fullPage: false,
    title: null,
    description: "Siwa Omondi's personal website.",
    subdirectory: "",
};

export default MiscallenousLayout;
