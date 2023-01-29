import { Helmet, HelmetProvider } from "react-helmet-async";
import PropTypes from "prop-types";
import SmallNavbar from "../components/NavBar/SmallNavBar";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const ArticleLayout = (props)=>{
    const {id} = useParams()
    let isMain =  id? false:true
    const categories = ["politics","philosophy","programming"]
    return (
        <>
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
                        content={`https://siwaomondi.com/articles/${props.subdirectory}`}
                    />
                    <link
                        rel="canonical"
                        href={`http://siwaomondi.com/articles/${props.subdirectory}`}
                    />
                </Helmet>
                <div className="layout__page">
                    <SmallNavbar isMain = {isMain} categories={categories}></SmallNavbar>
                    {props.children}
                    <Footer></Footer>
                </div>
                
            </HelmetProvider>
        </>
    );
}

ArticleLayout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    fullPage: PropTypes.bool,
    title: PropTypes.string,
    description: PropTypes.string,
};

ArticleLayout.defaultProps = {
    children: null,
    fullPage: false,
    title: null,
    description: "Siwa Omondi's personal website.",
    subdirectory: "",
    route:""
};
export default ArticleLayout;
