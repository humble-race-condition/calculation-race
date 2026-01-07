import {useDispatch, useSelector} from "react-redux";
import {setDark} from "../../config/store/global";
import {type RootState} from "../../config/store/storeConfiguration";
import styles from "./Navbar.module.css";
import {NavbarElement} from "./NavbarElement.tsx";

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
            path: '/',
            label: 'CalculationRace',
        },
        {
            id: 2,
            path: '/join-room',
            label: 'Join Room',
        },
        {
            id: 3,
            path: '/create-room',
            label: 'Create Room',
        },
        {
            id: 4,
            path: '/rankings',
            label: 'Rankings',
        },
    ];

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
