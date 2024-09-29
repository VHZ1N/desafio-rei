import styles from './home.module.scss';
const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.LeftSide}>
                    <img src="/logocrypto.svg" alt="Logo" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.
                    </p>
                    <img src="/twitter.svg" alt="Twitter" />
                    <img src="/instagram.svg" alt="Instagram" />
                    <img src="/linkedin.svg" alt="Linkedin" />
                </div>
                <div className={styles.RightSide}>
                    <div className={styles.crypto}>
                        <h1>Crypto®</h1>
                        <p>Download</p>
                        <p>NFT</p>
                        <p>Rank</p>
                        <p>Newsletter</p>
                        <p>FAQ</p>
                    </div>
                    <div className={styles.link}>
                        <h1>Important links</h1>
                        <p>About us</p>
                        <p>Questions</p>
                        <p>Press</p>
                        <p>Contant us</p>
                        <p>Legal</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;
