import { Helmet, HelmetProvider } from "react-helmet-async";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const NotFoundLayout = (props) => {
    return (
        <>
            <HelmetProvider>
                <Helmet title="404 Not Found">
                    <meta
                        name="description"
                        content="The content you are looking for cannot be found."
                    />
                </Helmet>
                <div className="not__found__layout">
                    <nav>
                        <Link to="/">siwa o.</Link>
                    </nav>
                    {props.children}
                    <span classname="c_t_a">
                        Get in touch,i don't bite. Or maybe i do ...get in
                        touch to find out
                    </span>
                    <Footer></Footer>
                </div>
            </HelmetProvider>
        </>
    );
};

NotFoundLayout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    fullPage: PropTypes.bool,
    title: PropTypes.string,
    description: PropTypes.string,
};

NotFoundLayout.defaultProps = {
    children: null,
    fullPage: false,
    title: null,
    description: "Siwa Omondi's personal website.",
    subdirectory: "",
};

export default NotFoundLayout;
