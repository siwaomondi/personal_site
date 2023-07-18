import { documents} from "../data/projects.js";

const PortfolioArchMainPage = () => {
    return ( 
        <>
            <h1>
                            Here are some architecturals design projects i am
                            somewhat proud of:
                        </h1>
            <object
                data="https://drive.google.com/file/d/1JuHuPDpEW8oehrb9n8P-ucagcNHg7w39/preview"
                type="application/pdf"
                width="100%"
                height="1000"
            >
                <p>
                    Unable to display PDF file.{" "}
                    <a href={documents.cv}>Download</a> instead.
                </p>
            </object>
        </>
    ); 
}
 
PortfolioArchMainPage.defaultProps = {};
export default PortfolioArchMainPage;
