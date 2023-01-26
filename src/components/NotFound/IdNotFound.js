import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const IdNotFound = (props) => {
    const redirectLink = props.link.toLowerCase();
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const title = capitalizeFirstLetter(props.title);
    return (
        <p>
            {title} id <span className="invalid_id_text">{props.errorId}</span> not found<br></br>
            Go to <Link to={`/${redirectLink}`}>{props.title}</Link>
        </p>
    );
};

IdNotFound.propTypes = {
    link: PropTypes.string,
    errorId: PropTypes.string,
};
export default IdNotFound;
