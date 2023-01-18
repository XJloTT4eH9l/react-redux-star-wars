import { useLocation } from 'react-router';
import img from './img/not-found.png';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
    let location = useLocation();
   
    return (
        <div className={styles.block}>
            <img className={styles.img} src={img} alt='Not found 404' />
            <p className={styles.text}>No match for <u>{location.pathname}</u></p>
        </div>
    )
}

export default NotFoundPage;
