import styles from './home.module.scss';

const Cards = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.Text}>
                    <h3>Trending</h3>
                    <h2>Popular Artwork</h2>
                </div>
                <div className={styles.Menu1}>
                    <nav className={styles.menu}>
                        <ul>
                            <li>
                                <a href="#">All</a>
                            </li>
                            <li>
                                <a href="#">Cyberpunk</a>
                            </li>
                            <li>
                                <a href="#">3D</a>
                            </li>
                            <li>
                                <a href="#">Video</a>
                            </li>
                            <li>
                                <a href="#">GIF</a>
                            </li>
                            <li>
                                <a href="#">AI Art</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={styles.Images}>
                    <img src="/NFTpolvo.svg" alt="Polvo" />
                    <img src="/NFTmulher.svg" alt="Mulher" />
                    <img src="/NFTkid.svg" alt="Kid" />
                    <img src="/NFTia.svg" alt="IA" />
                </div>
            </div>
        </div>
    );
};

export default Cards;
