import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { getApiResourse } from '@utils/network'; 
import { useParams } from 'react-router';
import { API_PERSON } from '@constants/api';
import { withErrorApi } from '@hoc/withErrorApi';
import { getPeopleImage } from '@services/getPeopleData';

import PersonInfo from '@components/PersonPage/PersonInfo';
import PersonPhoto from '@components/PersonPage/PersonPhoto';

import styles from './PersonPage.module.css';

const PersonPage = ({ setErrorApi }) => {
    const { id } = useParams();
    const [personName, setPersonName] = useState(null);
    const [personInfo, setPersonInfo] = useState(null);
    const [personPhoto, setPersonPhoto] = useState(null);

    useEffect(() => {
        (async () => {
            const res = await getApiResourse(`${API_PERSON}/${id}/`);
            
            if(res) {
                setPersonInfo([
                    {title: 'Height', data: res.height},
                    {title: 'Mass', data: res.mass},
                    {title: 'Hair Color', data: res.hair_color},
                    {title: 'Skin Color', data: res.skin_color},
                    {title: 'Eye Color', data: res.eye_color},
                    {title: 'Birth Year', data: res.birth_year},
                    {title: 'Gender', data: res.gender},
                ])
                setPersonName(res.name);
                setPersonPhoto(getPeopleImage(id));
                //res.films
                setErrorApi(false)
            } else {
                setErrorApi(true)
            } 
        })();
    }, [])
    return (
        <>
            <div className={styles.wrapper}>
                <h1 className={styles.person__name}>{personName}</h1>

                <div className={styles.container}>
                    <PersonPhoto 
                        personPhoto={personPhoto} 
                        personName={personName} 
                    />

                    {personInfo && <PersonInfo personInfo={personInfo} /> }
                </div>
                
            </div>
        </>
    )
}

PersonPage.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(PersonPage);
