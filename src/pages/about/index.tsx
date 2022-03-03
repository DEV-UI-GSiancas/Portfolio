import { Link } from "react-router-dom";

export const About = () => {
    return(
        <div className="page -about --center">
            <h1>About Page</h1>
            <Link to={"/"}>{"Home >"}</Link>
            <br />
            <br />
        </div>
    )
}