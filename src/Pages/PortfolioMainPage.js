import ProjectLayout from "../layouts/ProjectLayout.js";
import NotFoundComponent from "./NotFoundComponent.js";
// import { withRouter } from "react-router-dom";
import { documents} from "../data/projects.js";
import cv from "../documents/curriculum_vitae_siwa_omondi.pdf";
const PortfolioMainPage = (props) => {
    const portfolio_document = "../documents/curriculum_vitae_siwa_omondi.pdf";
    return (
        <ProjectLayout>
            Here are some architecturals design projects i am somewhat proud of:
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
        </ProjectLayout>
    );
};

PortfolioMainPage.defaultProps = {};
export default PortfolioMainPage;
