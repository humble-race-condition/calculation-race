import {NavLink} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {setDark} from "../../config/store/global";
import {RootState} from "../../config/store/storeConfiguration";

function Navbar() {
    const dispatch = useDispatch();
    const isDarkThemeChecked = useSelector((state: RootState) => state.global.isDarkThemeChecked);

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
                       checked={isDarkThemeChecked}
                       onChange={(e) => dispatch(setDark(e.target.checked))}
                />
                <span className="theme-slider"></span>
            </label>
        </nav>
    </>;
}

export default Navbar;