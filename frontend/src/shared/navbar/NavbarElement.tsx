import styles from "./Navbar.module.css";
import {NavLink} from "react-router";

interface NavbarElementProps {
    path: string,
    label: string
}

export function NavbarElement({path, label}: NavbarElementProps) {
    return (
        <li className={styles.headerListElement}>
            <NavLink
                className={({isActive}) => isActive
                    ? `${styles.headerListElementLink} ${styles.active}`
                    : styles.headerListElementLink}
                to={path}>
                {label}
            </NavLink>
        </li>);
}