import { Component } from "react";
import { NavLink } from "react-router-dom";
import { Link, useParams, useNavigate } from "react-router-dom";

const SmallNavbar = (props) => {
    const categories = ["articles", "portfolio"];
    const navigate = useNavigate();
    /**
     * Returns left navbar component
     * @param {list} render_list The list to map into html.
     * @return {Component} for diebar.
     */
    const navSideLinks = (render_list) => (
        <div>
            {render_list.map((e, index) => {
                let urlId= e.id? e.id:e
                let navTag =e.tag? e.tag:e
                console.log(urlId,e.tag)
                return (
                <>
                    {index != 0 ? <span> | </span> : null}
                    {props.isMain || props.isMiscellaneous ? (
                        <NavLink
                            to={
                                props.isProject
                                    ? `/portfolio/${urlId}`
                                    : `/${urlId}`
                            }
                            className="s_nav_link"
                        >
                            {navTag}
                        </NavLink>
                    ) : props.isNotFound ? (
                        <button onClick={() => navigate(-2)}>{e}</button>
                    ) : (
                        <Link className="s_nav_link">{e}</Link>
                    )}
                </>
            )})}
        </div>
    );
    const navigationList = ["← prev", "next →"];
    return (
        <nav class="small__page__nav">
            <Link to="/">siwa.</Link>
            {props.isNotFound
                ? navSideLinks(["← go back"])
                : props.isMain
                ? navSideLinks(categories)
                : props.isMiscellaneous
                ? navSideLinks(props.categories)
                : navSideLinks(navigationList)}
        </nav>
    );
};

SmallNavbar.defaultProps = {
    route: "",
    categories: [],
    isMiscellaneous: false,
    isMain: false,
    isNotFound: false,
    isProject: false,
};

export default SmallNavbar;
