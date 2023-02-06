import { useDispatch } from 'react-redux';
import { setPersonToFavorite, removePersonFromFavorite }  from '@store/redux-slices/favoritesSlice';
import PropTypes from 'prop-types';
import iconFavoritFill from './img/favorit-fill.svg';
import iconFavorit from './img/favorit.svg';
import styles from './PersonPhoto.module.css';


const PersonPhoto = ({ personId, personName, personPhoto, personFavorit, setPersonFavorit }) => {
    const dispatch = useDispatch();
        const dispatchFavoritPeople = () => {
            if(personFavorit) {
                dispatch(
                    removePersonFromFavorite({personId})
                )
                setPersonFavorit(false);
            } else {
                dispatch(
                    setPersonToFavorite({
                        id: personId,
                        name: personName,
                        img: personPhoto
                    })
                )
                setPersonFavorit(true);
            }
        }
    return (
        <>  
            <div className={styles.container}>
                <img className={styles.photo} src={personPhoto} alt={personName} />
                <img 
                    className={styles.favorit}
                    onClick={dispatchFavoritPeople} 
                    src={personFavorit ? iconFavoritFill : iconFavorit} 
                    alt='favorit'
                /> 
            </div>
        </>
    )
}

PersonPhoto.propTypes = {
    personId: PropTypes.string,
    personPhoto: PropTypes.string,
    personName: PropTypes.string,
    personFavorit: PropTypes.bool,
    setPersonFavorit: PropTypes.func
}

export default PersonPhoto;
