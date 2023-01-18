import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { getApiResourse } from '@utils/network';
import { API_PEOPLE } from '@constants/api';
import { getPeopleId, getPeopleImage, getPeoplePageId } from '@services/getPeopleData';
import PeopleList from '@components/PeoplePage/PeopleList';
import PeopleNavigation from '@components/PeoplePage/PeopleNavigation';
import { withErrorApi } from '@hoc/withErrorApi';
import { useQuaryParams } from '@hooks/useQuaryParams';

import styles from './PeoplePage.module.css';

const PeoplePage = ({ setErrorApi }) => {
    const [people, setPeople] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [counterPage, setCounterPage] = useState(1);

    const query = useQuaryParams();
    const queryPage = query.get('page');

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
            setPrevPage(res.previous);
            setNextPage(res.next);
            setCounterPage(getPeoplePageId(url));
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }
    }

    useEffect(() => {
        getResourse(API_PEOPLE + queryPage);
    },[])

    return (
        <>
            <PeopleNavigation
                getResourse={getResourse}
                prevPage={prevPage}
                nextPage={nextPage}
                counterPage={counterPage} 
            />
            {people && <PeopleList people={people} />}
        </>
    )
}

PeoplePage.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(PeoplePage);