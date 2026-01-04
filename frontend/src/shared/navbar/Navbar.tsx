import {NavLink} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {setDark} from "../../config/store/global";
import {type RootState} from "../../config/store/storeConfiguration";
import styles from "./Navbar.module.css";

function Navbar() {
    const dispatch = useDispatch();
    const isDarkThemeChecked = useSelector((state: RootState) => state.global.isDarkThemeChecked);

    return <>
        <nav className={styles.header}>
            <ul className={styles.headerList}>
                <li className={styles.headerListElement}>
                    <NavLink className={styles.headerListElementLink} to="/">CalculationRace</NavLink>
                </li>
                <li className={styles.headerListElement}>
                    <NavLink className={styles.headerListElementLink} to="/join-room"> Join Room</NavLink>
                </li>
                <li className={styles.headerListElement}>
                    <NavLink className={styles.headerListElementLink} to="/create-room">Create Room</NavLink>
                </li>
                <li className={styles.headerListElement}>
                    <NavLink className={styles.headerListElementLink} to="/rankings">Rankings</NavLink>
                </li>
            </ul>
            <label className={styles.themeSwitch}>
                <input className={styles.themeSwitchInput}
                       type="checkbox"
                       checked={isDarkThemeChecked}
                       onChange={(e) => dispatch(setDark(e.target.checked))}
                />
                <span className={styles.themeSlider}></span>
            </label>
        </nav>
    </>;
}

export default Navbar;