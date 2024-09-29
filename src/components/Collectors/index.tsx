import styles from './home.module.scss';

const Collectors = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.LeftSide}>
                    <div className={styles.Text}>
                        <h3>This week</h3>
                        <h2>Top Collectors</h2>
                    </div>
                    <div className={styles.LeftCoin}>
                        <img src="Etherium.svg" alt="Moeda" />
                    </div>
                </div>
                <div className={styles.Table}>
                    <div className={styles.Names}>
                        <img src="/avatar01.svg" alt="First" />
                        <p>Jhon</p>
                        <p>@jhonNFT</p>
                        <p>32.322,2 ETH</p>
                        <img src="/crypto.svg" alt="1" />
                        <img src="/avatar02.svg" alt="Second" />

                        <p>Jhon</p>
                        <p>@jhonNFT</p>
                        <p>32.322,2 ETH</p>
                        <img src="/crypto.svg" alt="2" />
                        <img src="/avatar03.svg" alt="Third" />

                        <p>Jhon</p>
                        <p>@jhonNFT</p>
                        <p>32.322,2 ETH</p>
                        <img src="/crypto.svg" alt="3" />
                        <img src="/avatar04.svg" alt="Fourth" />

                        <p>Jhon</p>
                        <p>@jhonNFT</p>
                        <p>32.322,2 ETH</p>
                        <img src="/crypto.svg" alt="4" />
                        <img src="/avatar05.svg" alt="Fifth" />

                        <p>Jhon</p>
                        <p>@jhonNFT</p>
                        <p>32.322,2 ETH</p>
                        <img src="/crypto.svg" alt="5" />
                        <img src="/avatar06.svg" alt="Sixth" />

                        <p>Jhon</p>
                        <p>@jhonNFT</p>
                        <p>32.322,2 ETH</p>
                        <img src="/crypto.svg" alt="6" />
                        <img src="/avatar07.svg" alt="Seventh" />

                        <p>Jhon</p>
                        <p>@jhonNFT</p>
                        <p>32.322,2 ETH</p>
                        <img src="/crypto.svg" alt="7" />
                        <img src="/avatar08.svg" alt="Eighth" />

                        <p>Jhon</p>
                        <p>@jhonNFT</p>
                        <p>32.322,2 ETH</p>
                        <img src="/crypto.svg" alt="8" />
                    </div>
                </div>
                <div className={styles.RightSide}>
                    <nav className={styles.menu}>
                        <a href="#">This Week</a>
                    </nav>
                    <div className={styles.RightCoin}>
                        <img src="Etherium.svg" alt="Moeda" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collectors;
