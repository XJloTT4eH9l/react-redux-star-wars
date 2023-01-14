import styles from './ErrorMessage.module.css';

const ErrorMessage = () => {
    return (
        <>
            <p className={styles.text}>
                The dark side has won.<br></br>
                We cannot display data.<br></br>
                Come back when we fix everything.
            </p>
        </>
    )
}

export default ErrorMessage;
