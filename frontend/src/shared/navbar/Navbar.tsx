import {useDispatch, useSelector} from "react-redux";
import {setDark} from "../../config/store/global";
import {type RootState} from "../../config/store/storeConfiguration";
import styles from "./Navbar.module.css";
import {NavbarElement} from "./NavbarElement.tsx";
import {Path} from "../constants.ts";

interface NavbarElement {
    id: number,
    path: string,
    label: string,
}

export default function Navbar() {
    const dispatch = useDispatch();
    const isDarkThemeChecked = useSelector((state: RootState) => state.global.isDarkThemeChecked);
    const navbarData: NavbarElement[] = [
        {
            id: 1,
            path: Path.HOME_PATH,
            label: 'CalculationRace',
        },
        {
            id: 2,
            path: Path.GAME_PATH,
            label: 'Game',
        },
        {
            id: 3,
            path: Path.JOIN_GAME_PATH,
            label: 'Join Game',
        },
        {
            id: 4,
            path: Path.RANKINGS_PATH,
            label: 'Rankings',
        },
    ];
    // TODo add catchall redirect for urls?
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
