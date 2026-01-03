import {NavLink} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {setTheme} from "../../config/store/global";
import {RootState} from "../../config/store/storeConfiguration";
import {Theme} from "../layout/Theme";

function Navbar() {
    const dispatch = useDispatch();
    const theme = useSelector((state: RootState) => state.global.theme);
    const isChecked = theme === Theme.DARK;

    return <>
        <nav className="header">
            <ul className="header-list">
                <li className="header-list-element">
                    <NavLink className={'header-list-element-link'} to="/">CalculationRace</NavLink>
                </li>
                <li className="header-list-element">
                    <NavLink className={'header-list-element-link'} to="/join-room"> Join Room</NavLink>
                </li>
                <li className="header-list-element">
                    <NavLink className={'header-list-element-link'} to="/create-room">Create Room</NavLink>
                </li>
                <li className="header-list-element">
                    <NavLink className={'header-list-element-link'} to="/rankings">Rankings</NavLink>
                </li>
            </ul>
            <label className="theme-switch">
                <input className="theme-switch-input"
                       type="checkbox"
                       checked={isChecked}
                       onChange={(e) => dispatch(setTheme(e.target.checked))}
                />
                <span className="theme-slider"></span>
            </label>
        </nav>
    </>;
}

export default Navbar;