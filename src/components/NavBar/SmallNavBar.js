import { Component } from "react";
import { Link, useParams } from "react-router-dom";

const SmallNavbar = (props) => {
    /**
     * Returns left navbar component
     * @param {list} render_list The list to map into html.
     * @return {Component} for diebar.
     */
    const navSideLinks = (render_list) => (
        <div>
            {render_list.map((e,index) => (
                <>
                    {index !=0? <span> | </span>:null}
                    <Link>{e}</Link>
                </>
            ))}
        </div>
    );
    const navigationList = ["← prev", "next →"];
    return (
        <nav class="small__page_nav">
            <Link to="/" style={{ fontSize: "2rem" }}>
                siwa o.
            </Link>
            {props.isMain
                ? navSideLinks(props.categories)
                : navSideLinks(
                      navigationList
                  )
            }
        </nav>
    );
};

SmallNavbar.defaultProps = {
    route: "",
    categories: [],
};

export default SmallNavbar;
