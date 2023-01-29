import { Link, useParams } from "react-router-dom";
import IdNotFound from "../components/NotFound/IdNotFound.js";
import ProjectLayout from "../layouts/ProjectLayout.js";
// import { withRouter } from "react-router-dom";
const PortfolioObjectPage = (props) => {
    const { id } = useParams();
    var content = "";
    return (
        <ProjectLayout route={id}>
            <div>
                {id == "project1" ? (
                    <h1>Will be updated soon...</h1>
                ) : (
                    <IdNotFound
                        link="pOrtfolio"
                        errorId={id}
                        title="projects"
                    ></IdNotFound>
                )}
            </div>
        </ProjectLayout>
    );
};

PortfolioObjectPage.defaultProps = {};
export default PortfolioObjectPage;
