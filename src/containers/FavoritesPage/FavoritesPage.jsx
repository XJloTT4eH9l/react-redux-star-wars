import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PeopleList from '@components/PeoplePage/PeopleList';
import PersonLinkBack from '@components/PersonPage/PersonLinkBack';
import styles from './FavoritesPage.module.css';

const FavoritesPage = () => {
    const storeData = useSelector(state => state.favorites.favoritesPersons);
    const [people, setPeople] = useState(storeData);
    
    useEffect(() => {
        setPeople(storeData);
    }, [])
    return (
        <>
            <PersonLinkBack />
            <h1 className='header__text'>Favorites Page</h1>
            {people.length > 0 
                ? <PeopleList people={people} /> 
                : <p className={styles.text}>Add at least one personage to favorites to see</p>
            }
           
        </>
    )
}

export default FavoritesPage