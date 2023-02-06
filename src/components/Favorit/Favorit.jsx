import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import icon from './img/favoritMark.svg';
import styles from './Favorit.module.css';

const Favorit = () => {
    const [count, setCount] = useState(0);
    const storeData = useSelector(state => state.favorites.favoritesPersons);
    const favoritesLength = storeData.length;

    useEffect(() => {
        favoritesLength.toString().length > 2 ? setCount('...') : setCount(favoritesLength);
    });

    return (
        <div className={styles.container}>
            <Link to='/favorites'>
                <span className={styles.counter}>{count}</span>
                <img className={styles.icon} src={icon} alt="favorites page" />
            </Link>
        </div>
    )
}

export default Favorit