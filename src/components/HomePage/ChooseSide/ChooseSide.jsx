import PropTypes from 'prop-types';
import { useTheme, THEME_DARK, THEME_LIGHT, THEME_NEITRAL } from '@context/ThemeProvider';
import cn from 'classnames';
import imgLightSide from './img/light-side.jpg';
import imgDarkSide from './img/dark-side.jpg';
import imgFalcon from './img/falcon.jpg';
import styles from './ChooseSide.module.css';

const ChooseSideItem = ({ theme, text, img, classes }) => {
    const isTheme = useTheme();
    return (
        <div className={cn(styles.item, classes)} onClick={() => isTheme.change(theme)}>
            <div className={styles.item__header}>{text}</div>
            <img className={styles.item__img} src={img} alt={text} />
        </div>
    )
}

ChooseSideItem.propTypes = {
    text: PropTypes.string,
    theme: PropTypes.string,
    img: PropTypes.string,
    classes: PropTypes.string
}

const ChooseSide = () => {
    const elements = [
        {
            theme: THEME_LIGHT,
            text: 'Light side',
            img: imgLightSide,
            classes: styles.item__light
        },
        {
            theme: THEME_DARK,
            text: 'Dark side',
            img: imgDarkSide,
            classes: styles.item__dark
        },
        {
            theme: THEME_NEITRAL,
            text: 'I`m Han Solo',
            img: imgFalcon,
            classes: styles.item__neitral
        }
    ];

    return (
        <div className={styles.container}>
            {elements.map(element => (
                <ChooseSideItem
                    key={element.theme}
                    theme= {element.theme}
                    text={element.text}
                    img={element.img}
                    classes={element.classes} 
                />
            ))}
        </div>
    )
}

export default ChooseSide;
