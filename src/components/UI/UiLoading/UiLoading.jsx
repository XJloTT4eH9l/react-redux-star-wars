import { useState, useEffect } from 'react';
import cn from 'classnames';

import loaderBlack from './img/loader-black.svg';
import loaderWhite from './img/loader-white.svg';
import loaderBlue from './img/loader-blue.svg';

import styles from './UiLoading.module.css';

const UiLoading = ({ theme='white', isShadow = true, classes }) => {
    const [loaderColor, setLoaderColor] = useState(null);
    
    useEffect(() => {
        switch(theme) {
            case 'white': setLoaderColor(loaderWhite); break;
            case 'blue': setLoaderColor(loaderBlue); break;
            case 'black': setLoaderColor(loaderBlack); break;
            default: setLoaderColor(loaderWhite)
        }
    })
    return (
        <div className={styles.wrapper}>
            <img className={cn(styles.loader, isShadow && styles.shadow)} src={loaderColor} alt='Loading'/>
        </div>
    )
}

export default UiLoading;
