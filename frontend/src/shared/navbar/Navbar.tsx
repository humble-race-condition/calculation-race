import {NavLink, Outlet} from "react-router";

function Navbar() {
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
                <input className="theme-switch-input" type="checkbox"/>
                <span className="theme-slider"></span>
            </label>
        </nav>
        <Outlet/>
    </>;
}

export default Navbar;