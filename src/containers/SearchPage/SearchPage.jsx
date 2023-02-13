import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import { debounce } from 'lodash';

import UiInput from '@components/UI/UiInput';
import { getApiResourse } from '@utils/network';
import { API_SEARCH } from '@constants/api';
import { withErrorApi } from '@hoc/withErrorApi';
import { getPeopleId, getPeopleImage } from '@services/getPeopleData';

import SearchPageInfo from '@components/SearchPage/SearchPageInfo';
import styles from './SearchPage.module.css';

const SearchPage = ({ setErrorApi }) => {
    const [inputSearchValue, setInputSearchValue] = useState('');
    const [people, setPeople] = useState([]);

    const getResponce = async (param) => {
        const res = await getApiResourse(API_SEARCH + param);

        if(res) {
            const peopleList = res.results.map(({ name, url}) => {
                const id = getPeopleId(url);
                const img = getPeopleImage(id);

                return {
                    id,
                    name,
                    img
                }
            })
            setPeople(peopleList);
            setErrorApi(false)
        } else {
            setErrorApi(true)
        }
    }
    const debouncedGetResponce = useCallback(
        debounce(value => getResponce(value), 300),
        []
    )

    const handleInputChange = (value) => {
        setInputSearchValue(value);
        debouncedGetResponce(value);
    }

    useEffect(() => {
        getResponce('');
    }, [])
    return (
        <>
            <h1 className='header__text'>Search</h1>
            <UiInput 
                type='text'
                value={inputSearchValue}
                handleInputChange={handleInputChange}
                placeholder='Input characters name...'
                classes={styles.input__search}
            />
            <SearchPageInfo people={people} />
        </>
    )
}

SearchPage.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(SearchPage);
