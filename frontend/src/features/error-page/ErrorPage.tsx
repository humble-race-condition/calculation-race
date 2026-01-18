import styles from './ErrorPage.module.css';
import PanelTitle from "../../shared/panel-title/PanelTitle.tsx";
import PanelDescription from "../../shared/panel-description/PanelDescription.tsx";
import {NavLink} from "react-router";
import {Path} from "../../shared/constants.ts";

export default function ErrorPage() {
    return (
        <div className={styles.main}>
            <PanelTitle title={"Ooops, something unexpected has happened"}/>
            <PanelDescription title={"Please go to the home page and continue from there!"}/>
            <div className={styles.linkContainer}>
                <NavLink
                    className={styles.link}
                    to={Path.HOME_PATH}>
                    {"To Home page"}
                </NavLink>
            </div>
        </div>
    );
}
