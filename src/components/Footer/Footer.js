import { footerLinks } from "../../data/about_me/about_me";
import { HashLink } from "react-router-hash-link";
function Footer() {
    const links = footerLinks;
    return (
        <section class="footer" >
            <div class="footer__content">
                <div className="footer__links">
                    <span>
                        <HashLink
                            to="#"
                            smooth
                            style={{
                                paddingRight: "1rem",
                                fontSize: "30px",
                                height: "16px",
                            }}
                        >
                            ⌂
                        </HashLink>
                    </span>
                    {/* <span>
                        <a href={links.twitter}>twitter</a>
                    </span>
                    <span> | </span> */}
                    <span>
                        <a href={links.linkedIn}>linkedIn</a>
                    </span>
                    <span> | </span>
                    <span>
                        <a href={links.github}>github</a>
                    </span>
                    <span> | </span>
                    <span>
                        <a href="mailto: siwaomondi@gmail.com">email</a>
                    </span>
                </div>
                <div className="made_in">
                    <span>made in Kanairo</span>
                </div>
            </div>
        </section>
    );
}

export default Footer;
