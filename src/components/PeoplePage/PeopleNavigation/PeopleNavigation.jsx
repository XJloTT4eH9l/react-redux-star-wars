import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './PeopleNavigation.module.css';

const PeopleNavigation = ({
    nextPage,
    prevPage,
    counterPage,
    getResourse
    }) => {
    const handleChangeNext = () => {
        getResourse(nextPage)
    }
    const handleChangePrev = () => {
        getResourse(prevPage)
    }
    return (
        <div>
            <Link to={`/people/?page=${counterPage - 1}`} className={styles.link}>
                <button 
                onClick={handleChangePrev} 
                className={styles.button}
                disabled={!prevPage}
                >
                    Previous
                </button>
            </Link>
            <Link to={`/people/?page=${counterPage + 1}`} className={styles.link}>
                <button 
                onClick={handleChangeNext} 
                className={styles.button}
                disabled={!nextPage}
                >
                    Next
                </button>
            </Link>
        </div>
    )
}

PeopleNavigation.propTypes = {
    getResourse: PropTypes.func,
    nextPage: PropTypes.string,
    prevPage: PropTypes.string,
    counterPage: PropTypes.number
}

export default PeopleNavigation;
