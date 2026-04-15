import {useDispatch, useSelector} from "react-redux";
import {setDark} from "../../config/store/global";
import {type RootState} from "../../config/store/storeConfiguration";
import styles from "./Navbar.module.css";
import {NavbarElement} from "./NavbarElement.tsx";
import {UrlPath} from "../constants.ts";

interface NavbarElement {
    id: number,
    path: string,
    label: string,
}

export default function Navbar() {
    const dispatch = useDispatch();
    const isDarkThemeChecked = useSelector((state: RootState) => state.globalSlice.isDarkThemeChecked);
    const navbarData: NavbarElement[] = [
        {
            id: 1,
            path: UrlPath.HOME_PATH,
            label: 'CalculationRace',
        },
        {
            id: 2,
            path: UrlPath.GAME_PATH,
            label: 'Game',
        },
        {
            id: 3,
            path: UrlPath.JOIN_GAME_PATH,
            label: 'Join Game',
        },
        {
            id: 4,
            path: UrlPath.RANKINGS_PATH,
            label: 'Rankings',
        },
    ];
    // TODO add catchall redirect for urls?
    return <>
        <nav className={styles.header}>
            <ul className={styles.headerList}>
                {navbarData.map((item) => <NavbarElement {...item} key={item.id}/>)}
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
