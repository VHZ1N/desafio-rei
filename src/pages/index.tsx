import Cards from '../components/Cards';
import Collectors from '../components/Collectors';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Newsletter from '../components/Newsletter';
import Stripe from '../components/Stripe';
import styles from './home.module.scss';

export default function Home() {
    return (
        <>
            <div className={styles.blurWrapper}>
                <img
                    src="blur-circle.svg"
                    alt="Blur Circle"
                    className={styles.blurCircle}
                />
            </div>

            <Header />
            <Hero />
            <Stripe />
            <Cards />
            <Collectors />
            <Newsletter />
            <FAQ />
            <Footer />

            <div className={styles.blurWrapper2}>
                <img
                    src="blur-circle.svg"
                    alt="Blur Circle"
                    className={styles.blurCircle2}
                />
            </div>
        </>
    );
}
