import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './UiBurgerIcon.module.css';

const UiBurgerIcon = ({ burgerOpen, setBurgerOpen }) => {
    const burgerHandler = () => {
        if(burgerOpen) {
            setBurgerOpen(false);
            document.body.style.overflow = 'visible'
        } else {
            setBurgerOpen(true);
            document.body.style.overflow = 'hidden'
        }
    }
    return (
        <button 
            className={burgerOpen ? cn(styles.burger, styles.burger__active) : styles.burger}
            onClick={burgerHandler}
            aria-label='burger-button'
            aria-labelledby='burger-button'
        >
            <span className={styles.burger__item}></span>
            <span className={styles.burger__item}></span>
            <span className={styles.burger__item}></span>
        </button>
    )
}

UiBurgerIcon.propTypes = {
    burgerOpen: PropTypes.bool,
    setBurgerOpen: PropTypes.func,
}

export default UiBurgerIcon;
