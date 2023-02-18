import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme, THEME_DARK, THEME_LIGHT, THEME_NEITRAL } from '@context/ThemeProvider';
import Favorit from '@components/Favorit';
import imgDroid from './img/droid.png';
import imgLightSaber from './img/lightsaber.png';
import imgDeadStar from './img/space-station.png';
import styles from './Header.module.css';

const Header = () => {
    const [icon, setIcon] = useState(imgDroid);
    const isTheme = useTheme();

    useEffect(() => {
        switch(isTheme.theme) {
            case THEME_LIGHT: setIcon(imgLightSaber); break;
            case THEME_DARK: setIcon(imgDeadStar); break;
            case THEME_NEITRAL: setIcon(imgDroid); break;
            default: setIcon(imgDroid);
        }
    }, [isTheme])
    return (
        <>
            <div className={styles.container}>
                <img className={styles.logo} src={icon} alt='logo star wars' />
                <ul className={styles.list__container}>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/people?page=1">People</NavLink></li>
                    <li><NavLink to="/search">Search</NavLink></li>
                    <li><NavLink to="/fail">Fail</NavLink></li>
                    <li><NavLink to="/not-found">Not found</NavLink></li>
                </ul>
                <Favorit />
            </div>
        </>
    )
}

export default Header;
