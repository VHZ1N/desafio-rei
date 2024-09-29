import styles from './home.module.scss';

const Stripe = () => {
    return (
        <div className={styles.container}>
            <div className={styles.movingBars}>
                <div className={styles.topBar}>
                    <div className={styles.topBarContent}>
                        <span>CRYPTO®</span>
                        <span>20% OFF</span>
                        <span>CRYPTO®</span>
                        <span>20% OFF</span>
                        <span>CRYPTO®</span>
                        <span>20% OFF</span>
                        <span>CRYPTO®</span>
                        <span>20% OFF</span>
                        <span>CRYPTO®</span>
                        <span>20% OFF</span>
                        <span>CRYPTO®</span>
                        <span>20% OFF</span>
                    </div>
                </div>
                <div className={styles.bottomBar}>
                    <div className={styles.bottomBarContent}>
                        <span>CRYPTO®</span>
                        <span>20% OFF</span>
                        <span>CRYPTO®</span>
                        <span>20% OFF</span>
                        <span>CRYPTO®</span>
                        <span>20% OFF</span>
                        <span>CRYPTO®</span>
                        <span>20% OFF</span>
                        <span>CRYPTO®</span>
                        <span>20% OFF</span>
                        <span>CRYPTO®</span>
                        <span>20% OFF</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stripe;
