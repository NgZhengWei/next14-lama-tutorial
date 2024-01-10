import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Creative Writing Agency</h1>
                    <p className={styles.description}>
                        We are the the number 1 solution for writing creative
                        that sells
                    </p>
                    <div className={styles.buttons}>
                        <button className={styles.button}>Learn More</button>
                        <button className={styles.button}>Contact</button>
                    </div>
                    <div className={styles.brands}>
                        <Image
                            src="/brands.png"
                            alt=""
                            fill
                            className={styles.brandImg}
                        />
                    </div>
                </div>

                <div className={styles.imageContainer}>
                    <Image
                        src="/hero.gif"
                        alt=""
                        fill={true}
                        className={styles.heroImg}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
