function Navbar() {
    return <nav className="header">
        <ul className="header-list">
            <li className="header-list-element"><a className="header-list-element-link" href="#home">CalculationRace</a>
            </li>
            <li className="header-list-element"><a className="header-list-element-link" href="#about">Join Room</a></li>
            <li className="header-list-element"><a className="header-list-element-link" href="#rankings">Create Room</a>
            </li>
            <li className="header-list-element"><a className="header-list-element-link" href="#contact">Rankings</a>
            </li>
        </ul>
        <label className="theme-switch">
            <input className="theme-switch-input" type="checkbox"/>
            <span className="theme-slider"></span>
        </label>
    </nav>;
}

export default Navbar;