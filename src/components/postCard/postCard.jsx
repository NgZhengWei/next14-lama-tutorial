import React from "react";
import styles from "./postCard.module.css";
import Image from "next/image";
import Link from "next/link";

const PostCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image
                        src="https://images.pexels.com/photos/16844098/pexels-photo-16844098/free-photo-of-woman-sitting-in-blossoming-orchard.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        fill={true}
                        className={styles.img}
                    />
                </div>
                <span className={styles.date}>01.01.2024</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>Title</h1>
                <p className={styles.description}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Facere, nemo odio totam nobis laborum similique reiciendis
                    id cum quo repellendus ab excepturi aut eveniet culpa
                    aspernatur corporis, dolore, sapiente numquam!
                </p>
                <Link href="/blog/post" className={styles.link}>
                    Read more...
                </Link>
            </div>
        </div>
    );
};

export default PostCard;
