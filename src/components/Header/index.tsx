import styles from './home.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src="/logocrypto.svg" alt="Crypto Logo" />
                </div>

                <nav className={styles.menu}>
                    <ul>
                        <li>
                            <a href="#">Download</a>
                        </li>
                        <li>
                            <a href="#">NFTs</a>
                        </li>
                        <li>
                            <a href="#">Rank</a>
                        </li>
                        <li>
                            <a href="#">Newsletter</a>
                        </li>
                        <li>
                            <a href="#">FAQ</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
