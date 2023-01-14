import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { getApiResourse } from '@utils/network';
import { API_PEOPLE } from '@constants/api';
import { getPeopleId, getPeopleImage } from '@services/getPeopleData';
import PeopleList from '@components/PeoplePage/PeopleList';
import { withErrorApi } from '@hoc/withErrorApi';

import styles from './PeoplePage.module.css';

const PeoplePage = ({ setErrorApi }) => {
    const [people, setPeople] = useState(null);

    const getResourse = async (url) => {
        const res = await getApiResourse(url);

        if(res) {
            const peopleList = res.results.map(({ name, url}) => {
                const id = getPeopleId(url);
                const img = getPeopleImage(id);
    
                return {
                    id: id,
                    name: name,
                    img: img
                }
            });
    
            setPeople(peopleList);
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }
    }

    useEffect(() => {
        getResourse(API_PEOPLE);
    },[])

    return (
        <>
            <h2>Navigation</h2>
            {people && <PeopleList people={people} />}
        </>
    )
}

PeoplePage.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(PeoplePage);