import UiVideo from '@ui/UiVideo';
import video from './video/han-solo.mp4';
import styles from './ErrorMessage.module.css';

const ErrorMessage = () => {
    return (
        <>
            <p className={styles.text}>
                The dark side has won.<br></br>
                We cannot display data.<br></br>
                Come back when we fix everything.
            </p>
            <UiVideo src={video} classes={styles.video} playbackRate={1.0} />
        </>
    )
}

export default ErrorMessage;
