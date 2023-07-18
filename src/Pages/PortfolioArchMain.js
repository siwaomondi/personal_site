import { documents } from "../data/projects.js";

const PortfolioArchMainPage = () => {
    return (
        <>
            <div>
                Here are some architectural design projects i am somewhat proud
                of:
            </div>
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
};

PortfolioArchMainPage.defaultProps = {};
export default PortfolioArchMainPage;
