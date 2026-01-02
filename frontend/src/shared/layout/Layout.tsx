import React from 'react';
import {Outlet} from "react-router";
import Navbar from "../navbar/Navbar";

function Layout() {
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    );
}

export default Layout;

//            <div>
//                 Hello there
//             </div>
//             <div style={{ display: 'flex', justifyContent: 'center', height: '50px' }}>
//                 {count}
//             </div>
//             <button type="button" onClick={() => dispatch(increment())}>
//                 Click me!
//             </button>

// const count = useSelector((state: RootState) => state.counter.value)
// const dispatch = useDispatch()