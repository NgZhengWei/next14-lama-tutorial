import Image from "next/image";
import React from "react";
import styles from "./about.module.css";
import aboutImage from "../../../public/about.png";

const AboutPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.subtitle}>About Agency</h2>
                <h1 className={styles.title}>
                    We create digital ideas that are bigger, bolder, braver and
                    better.
                </h1>
                <p className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    at justo id urna cursus eleifend. Fusce suscipit mi eget
                    justo cursus, vel aliquam nunc vestibulum. Nunc vel justo ut
                    nisi fermentum venenatis. Integer non sem non nunc lacinia
                    bibendum ut id libero. Ut auctor, velit nec tristique
                    commodo, sapien libero auctor felis, a efficitur orci elit
                    ut sem. Sed eu turpis ac ligula varius commodo. Fusce et
                    pulvinar elit.
                </p>
                <div className={styles.boxes}>
                    <div className={styles.box}>
                        <h1>10 K+</h1>
                        <p>Year of experience</p>
                    </div>
                    <div className={styles.box}>
                        <h1>234 K+</h1>
                        <p>People reached</p>
                    </div>
                    <div className={styles.box}>
                        <h1>5 K+</h1>
                        <p>Services and plugins</p>
                    </div>
                </div>
            </div>

            <div className={styles.imageContainer}>
                <Image
                    src={aboutImage}
                    alt=""
                    fill={true}
                    className={styles.img}
                />
            </div>
        </div>
    );
};

export default AboutPage;
