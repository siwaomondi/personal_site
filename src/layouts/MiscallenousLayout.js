import { Helmet, HelmetProvider } from "react-helmet-async";
import PropTypes from "prop-types";
import Footer from "../components/Footer/Footer";
import SmallNavbar from "../components/NavBar/SmallNavBar";

const SideSection = () => {
    return (
        <div className="sideSection">
            <div className="image__wrapper">
                <img src="images\intro_image\personal_image.png"></img>
            </div>

            
            <span style={{fontSize:'14px'}}>Hi. I'm Siwa. I design and build things.</span>
            {/* <button className="cv__button">download cv</button> */}
        </div>
    );
};

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
            <div className="layout__page">
                <SmallNavbar
                    categories={["about", "resume"]}
                    isMiscellaneous={true}
                ></SmallNavbar>
                <div className="c-flex">
                    <SideSection></SideSection>
                    <div className="content_wrapper">{props.children}</div>
                </div>

                <Footer></Footer>
            </div>
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
