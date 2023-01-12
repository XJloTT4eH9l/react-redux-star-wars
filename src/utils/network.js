export const getApiResourse = async (url) => {
    try {
        const res = await fetch(url);

        if(!res.ok) {
            console.error('could not fetch.', res.status);
            return false;
        }

        const body = await res.json();
        return body;
        
    } catch (error) {
        console.error('could not catch.', error.message);
        return false;
    }
}

// (async() => {
//     const body = await getApiResourse(SWAPI_ROOT+SWAPI_PEOPLE);
//     console.log(body)
// })();