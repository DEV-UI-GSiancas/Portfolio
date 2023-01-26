import { Link } from "react-router-dom";
import style from "./Home.module.scss";

export const HomePage = () => {
    return(
        <div className="container">
            <h1 className={style["home-header--thin"]}>
                Gino Siancas - <strong>UI Developer</strong>
            </h1>
            <h3>React - Typescript, Javascript, BEM-SMACSS, SASS, Unit Test.</h3>
            <hr />
            <p>
                Gino is a 8+ years Experience Web UI Developer. 
                He loves creating and delivering amazing UI products in React technology with Typescript.
                As He always say, every component must go with its corresponding Unit Test, React-Testing-Library.
            </p>
            <p>
                Want style? No problem! He can do from basic native CSS3 all the way to OOCSS, SMACSS, BEM with Sass or LESS.
                Not convinced? Well, He has no problem working with Boostrap, TailWind, React Styled-Component, and Sass.modules.
            </p>
            <p>Anyways, there much more to tell, but in this opportunity, He wants to share a small mini app called:</p>
            <h3>Cart With useReducer</h3>
            <Link to={"/"}>*INSERT LINK TO CODE*</Link>
        </div>
    )
}