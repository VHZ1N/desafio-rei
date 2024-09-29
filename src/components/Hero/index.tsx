import styles from './home.module.scss';

const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.Moeda}>
                    <img src="Etherium.svg" alt="Moeda1" />
                </div>
                <div className={styles.LeftSide}>
                    <h1>O Maior Marketplace de NFTs do Brasil</h1>
                    <div className={styles.icones}>
                        <img src="googleStore.svg" alt="Google" />
                        <img src="appleStore.svg" alt="Apple" />
                    </div>
                </div>

                <div className={styles.RightSide}>
                    <div className={styles.Moeda2}>
                        <img src="Etherium.svg" alt="Moeda2" />
                    </div>
                    <div className={styles.image}>
                        <img src="NFTpolvo.svg" alt="NFT" />
                        <img src="Etherium.svg" alt="Moeda3" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
