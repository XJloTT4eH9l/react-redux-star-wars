import { useNavigate }  from 'react-router-dom';
import iconBack from './img/back.svg';
import styles from './PersonLinkBack.module.css';

const PersonLinkBack = () => {
    const navigate = useNavigate();

    const handleGoBack = (e) => {
        e.preventDefault();
        navigate(-1);
    }
    return (
        <a
            href='#'
            className={styles.link}
            onClick={handleGoBack}
        >
            <img src={iconBack} className={styles.link__img} alt='go back' />
            <span>Go back</span>
        </a>
    )
}

export default PersonLinkBack;
