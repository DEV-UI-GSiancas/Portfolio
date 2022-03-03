import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../common/util/Context";

export const Home = () => {

    const contxtHandler = useContext(AppContext);
    contxtHandler.handleEvent();

    return(
        <div className="page -home --center">
            <h1>Home Page</h1>
            <Link to={"/about"}>{"About >"}</Link>
            <br />
            <br />
        </div>
    )
}