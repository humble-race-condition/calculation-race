import React, {useEffect} from 'react';
import {Outlet, useSearchParams} from "react-router";
import Navbar from "../navbar/Navbar";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../config/store/storeConfiguration";
import {Theme} from "./Theme";
import {setTheme} from "../../config/store/global";
import {Constants} from "../Constants";

function Layout() {
    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch();
    const theme = useSelector((state: RootState) => state.global.theme);
    const themeHeader = searchParams.get(Constants.THEME_KEY);

    useEffect(() => {
        if (themeHeader) {
            dispatch(setTheme(themeHeader));
        }
    }, [themeHeader, dispatch]);

    useEffect(() => {
        setSearchParams(prev => {
            const params = new URLSearchParams(prev);
            params.set(Constants.THEME_KEY, theme);
            return params;
        });
    }, [theme, setSearchParams]);

    useEffect(() => {
        const root = document.documentElement
        const backgroundColor = '--background-color';
        const textColor = '--text-color';
        const navigationBorderColor = '--navigation-border-color';
        const elementBorderColor = '--element-border-color';

        switch (theme) {
            case Theme.LIGHT:
                root.style.setProperty(backgroundColor, '#ffffff');
                root.style.setProperty(textColor, '#121791');
                root.style.setProperty(navigationBorderColor, '#e1e9ea');
                root.style.setProperty(elementBorderColor, '#121791');
                break;
            case Theme.DARK:
                root.style.setProperty(backgroundColor, '#333333');
                root.style.setProperty(textColor, '#FFA100');
                root.style.setProperty(navigationBorderColor, '#444444');
                root.style.setProperty(elementBorderColor, '#FFA100');
                break;
            default:
                root.style.setProperty(backgroundColor, '#ffffff');
                root.style.setProperty(textColor, '#121791');
                root.style.setProperty(navigationBorderColor, '#e1e9ea');
                root.style.setProperty(elementBorderColor, '#121791');
        }
    }, [theme]);

    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    );
}

export default Layout;
