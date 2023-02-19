import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UiButton from '@ui/UiButton';
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
        <div className={styles.container}>
            <Link to={`/people/?page=${counterPage - 1}`} className={styles.buttons}>
                <UiButton
                    text='Previous'
                    onClick={handleChangePrev}
                    disabled={!prevPage}
                />
            </Link>
            <Link to={`/people/?page=${counterPage + 1}`} className={styles.buttons}>
                <UiButton
                    text='Next'
                    onClick={handleChangeNext}
                    disabled={!nextPage} 
                />
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