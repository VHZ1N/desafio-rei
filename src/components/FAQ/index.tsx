import { useState } from 'react';
import styles from './home.module.scss';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h2 className={styles.faqTitle}>FAQ</h2>
                <div className={styles.faqItem}>
                    <div
                        className={styles.faqQuestion}
                        onClick={() => toggleFAQ(0)}
                    >
                        What is a non-fungible token (NFT)?
                        <span className={styles.faqArrow}>
                            {openIndex === 0 ? '▲' : '▼'}
                        </span>
                    </div>
                    {openIndex === 0 && (
                        <div className={styles.faqAnswer}>
                            A non-fungible token is a type of digital token that
                            represents a unique asset. These can either be
                            entirely digital assets or tokenized versions of
                            real-world assets.
                        </div>
                    )}
                </div>

                <div className={styles.faqItem}>
                    <div
                        className={styles.faqQuestion}
                        onClick={() => toggleFAQ(1)}
                    >
                        How do I buy an NFT?
                        <span className={styles.faqArrow}>
                            {openIndex === 1 ? '▲' : '▼'}
                        </span>
                    </div>
                    {openIndex === 1 && (
                        <div className={styles.faqAnswer}>
                            A non-fungible token is a type of digital token that
                            represents a unique asset. These can either be
                            entirely digital assets or tokenized versions of
                            real-world assets.
                        </div>
                    )}
                </div>

                <div className={styles.faqItem}>
                    <div
                        className={styles.faqQuestion}
                        onClick={() => toggleFAQ(2)}
                    >
                        What is Crypto® NFT Marketplace?
                        <span className={styles.faqArrow}>
                            {openIndex === 2 ? '▲' : '▼'}
                        </span>
                    </div>
                    {openIndex === 2 && (
                        <div className={styles.faqAnswer}>
                            A non-fungible token is a type of digital token that
                            represents a unique asset. These can either be
                            entirely digital assets or tokenized versions of
                            real-world assets.
                        </div>
                    )}
                </div>

                <div className={styles.faqItem}>
                    <div
                        className={styles.faqQuestion}
                        onClick={() => toggleFAQ(3)}
                    >
                        How do I sell an NFT?
                        <span className={styles.faqArrow}>
                            {openIndex === 3 ? '▲' : '▼'}
                        </span>
                    </div>
                    {openIndex === 3 && (
                        <div className={styles.faqAnswer}>
                            A non-fungible token is a type of digital token that
                            represents a unique asset. These can either be
                            entirely digital assets or tokenized versions of
                            real-world assets.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
