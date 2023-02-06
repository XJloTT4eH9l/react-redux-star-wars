import PropTypes from 'prop-types';
import React, { useState, useEffect, Suspense } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

import { withErrorApi } from '@hoc/withErrorApi';

import PersonInfo from '@components/PersonPage/PersonInfo';
import PersonPhoto from '@components/PersonPage/PersonPhoto';
import PersonLinkBack from '@components/PersonPage/PersonLinkBack';


import UiLoading from '@ui/UiLoading';

import { getApiResourse } from '@utils/network';
import { getPeopleImage } from '@services/getPeopleData';
import { API_PERSON } from '@constants/api'

import styles from './PersonPage.module.css';

const PersonFilms = React.lazy(() => import('@components/PersonPage/PersonFilms'));

const PersonPage = ({ setErrorApi }) => {
    let { id } = useParams();
    
    const [personId, setPersonId] = useState(null);
    const [personInfo, setPersonInfo] = useState(null);
    const [personName, setPersonName] = useState(null);
    const [personPhoto, setPersonPhoto] = useState(null);
    const [personFilms, setPersonFilms] = useState(null);
    const [personFavorit, setPersonFavorit] = useState(false);

    const storeData = useSelector(state => state.favorites.favoritesPersons);

    useEffect(() => {
        (async () => {
            const res = await getApiResourse(`${API_PERSON}/${id}/`);

            const isFavorit = storeData.find(item => item.id === id);
            isFavorit ? setPersonFavorit(true) : setPersonFavorit(false)
            
            setPersonId(id);

            if (res) {
                setPersonInfo([
                    { title: 'Height', data: res.height },
                    { title: 'Mass', data: res.mass },
                    { title: 'Hair Color', data: res.hair_color },
                    { title: 'Skin Color', data: res.skin_color },
                    { title: 'Eye Color', data: res.eye_color },
                    { title: 'Birth Year', data: res.birth_year },
                    { title: 'Gender', data: res.gender },
                ]);

                setPersonName(res.name);
                setPersonPhoto(getPeopleImage(id));

                res.films.length && setPersonFilms(res.films);

                setErrorApi(false);
            } else {
                setErrorApi(true);
            }
        })();
    }, []);

    return (
        <>
            <PersonLinkBack />

            <div className={styles.wrapper}>
                <span className={styles.person__name}>{personName}</span>
                
                <div className={styles.container}>
                    <PersonPhoto
                        personId={personId}
                        personPhoto={personPhoto}
                        personName={personName}
                        personFavorit={personFavorit}
                        setPersonFavorit={setPersonFavorit}
                    />

                    {personInfo && <PersonInfo personInfo={personInfo} />}

                    {personFilms && (
                        <Suspense fallback={<UiLoading />}>
                            <PersonFilms personFilms={personFilms} />
                        </Suspense>
                    )}
                </div>
            </div>
        </>
    )
}

PersonPage.propTypes = {
    match: PropTypes.object,
    setErrorApi: PropTypes.func,
}

export default withErrorApi(PersonPage);
