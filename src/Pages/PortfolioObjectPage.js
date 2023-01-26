import { useParams } from "react-router-dom";
import ProjectLayout from "../layouts/ProjectLayout.js";
// import { withRouter } from "react-router-dom";
const PortfolioObjectPage= (props)=> {
    const {portfolioId} = useParams()
    return (
        <ProjectLayout route = {portfolioId}>
            <h1>
                {/* ProjectId: {portfolioId} */}

                Will be updated soon...
            </h1>
        </ProjectLayout>
);
}


PortfolioObjectPage.defaultProps ={


}
export default PortfolioObjectPage;

