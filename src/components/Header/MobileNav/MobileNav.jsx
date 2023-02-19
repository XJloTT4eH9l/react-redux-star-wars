import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './MobileNav.module.css';

const MobileNav = ({ burgerOpen, setBurgerOpen }) => {
    const burgerHandler = () => {
        setBurgerOpen(false);
        document.body.style.overflow = 'visible';
    }
    return (
        <div className={burgerOpen ? cn(styles.mobileNav, styles.mobileNav__active) : styles.mobileNav}>
            <ul className={styles.mobileNav__container}>
                <li onClick={burgerHandler}><NavLink to="/">Home</NavLink></li>
                <li onClick={burgerHandler}><NavLink to="/people?page=1">People</NavLink></li>
                <li onClick={burgerHandler}><NavLink to="/search">Search</NavLink></li>
                <li onClick={burgerHandler}><NavLink to="/fail">Fail</NavLink></li>
                <li onClick={burgerHandler}><NavLink to="/not-found">Not found</NavLink></li>
            </ul>
        </div>
    )
}

MobileNav.propTypes = {
    burgerOpen: PropTypes.bool,
    setBurgerOpen: PropTypes.func
}

export default MobileNav;
