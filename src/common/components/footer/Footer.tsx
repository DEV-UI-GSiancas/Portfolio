import { Link } from "react-router-dom";
import "./Footer.scss";

export const Footer = () => {
    return (
        <footer className={"footer"}>
            <div>
                <p></p>
            </div>
            <div>
                <Link to={""} className={"footer__link--linkedin"}/>
                <Link to={""} className={"footer__link--instagram"}/>
                <Link to={""} className={"footer__link--twitter"}/>
                <Link to={""} className={"footer__link--github"}/>
            </div>
        </footer>
    )
}