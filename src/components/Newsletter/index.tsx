import styles from './home.module.scss';

const Newsletter = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.ellipse}>
                    <img src="/ellipse.svg" alt="First" />
                    <img src="/ellipse.svg" alt="Second" />
                    <img src="/ellipse.svg" alt="Third" />
                    <img src="/ellipse.svg" alt="Fourth" />
                    <img src="/ellipse.svg" alt="Fifth" />
                    <img src="/ellipse.svg" alt="Sixth" />
                    <img src="/ellipse.svg" alt="Seventh" />
                    <img src="/ellipse.svg" alt="Eighth" />
                    <img src="/ellipse.svg" alt="Ninth" />
                    <img src="/ellipse.svg" alt="Tenth" />
                    <img src="/ellipse.svg" alt="Eleventh" />
                    <img src="/ellipse.svg" alt="Twelfth" />
                    <img src="/ellipse.svg" alt="Thirteenth" />
                    <img src="/ellipse.svg" alt="Fourteenth" />
                    <img src="/ellipse.svg" alt="Fifteenth" />
                    <img src="/ellipse.svg" alt="Sixteenth" />
                    <img src="/ellipse.svg" alt="Seventeenth" />
                    <img src="/ellipse.svg" alt="Eighteenth" />
                    <img src="/ellipse.svg" alt="Nineteenth" />
                    <img src="/ellipse.svg" alt="Twentieth" />
                </div>
                <div className={styles.LeftSide}>
                    <img src="/avatar04.svg" alt="Avatar1" />
                    <img src="/avatar06.svg" alt="Avatar2" />
                    <img src="/avatar08.svg" alt="Avatar3" />
                </div>
                <div className={styles.Center}>
                    <h1>Subscribe to Our Newsletter</h1>
                    <h5>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h5>
                    <div className={styles.subscribeContainer}>
                        <form className={styles.subscribeForm}>
                            <input
                                type="email"
                                placeholder="Type your Email"
                                className={styles.emailInput}
                                required
                            />
                            <button
                                type="submit"
                                className={styles.subscribeButton}
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                    <img src="/avatar01.svg" alt="Avatar01" />
                </div>
                <div className={styles.RightSide}>
                    <img src="Avatar03.svg" alt="Avatar01" />
                    <img src="Avatar05.svg" alt="Avatar02" />
                    <img src="Avatar07.svg" alt="Avatar03" />
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
