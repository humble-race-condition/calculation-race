import {useEffect} from 'react';
import {Outlet, useSearchParams} from "react-router";
import Navbar from "../navbar/Navbar";
import {useDispatch, useSelector} from "react-redux";
import {type RootState} from "../../config/store/storeConfiguration";
import {setTheme} from "../../config/store/global";
import {Constants, Theme} from "../constants.ts";
import Footer from "../footer/Footer";

export default function Layout() {
    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch();
    const theme = useSelector((state: RootState) => state.globalSlice.theme);
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
        const root = document.documentElement;
        const primaryColor = '--primary-color';
        const secondaryColor = '--secondary-color';
        const errorColor = '--error-color';
        const ghostColor = '--ghost-color';

        switch (theme) {
            case Theme.LIGHT:
                root.style.setProperty(primaryColor, '#121791');
                root.style.setProperty(secondaryColor, '#ffffff');
                root.style.setProperty(errorColor, '#e51f1f');
                root.style.setProperty(ghostColor, '#e1e9ea');
                break;
            case Theme.DARK:
                root.style.setProperty(primaryColor, '#FFA100');
                root.style.setProperty(secondaryColor, '#333333');
                root.style.setProperty(errorColor, '#e51f1f');
                root.style.setProperty(ghostColor, '#444444');
                break;
            default:
                root.style.setProperty(primaryColor, '#121791');
                root.style.setProperty(secondaryColor, '#ffffff');
                root.style.setProperty(errorColor, '#e51f1f');
                root.style.setProperty(ghostColor, '#e1e9ea');
        }
    }, [theme]);

    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    );
}
