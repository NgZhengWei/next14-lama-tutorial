import React from "react";
import styles from "./singlePostPage.module.css";
import Image from "next/image";

const SinglePostPage = ({ params }) => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image
                    src="https://images.pexels.com/photos/16844098/pexels-photo-16844098/free-photo-of-woman-sitting-in-blossoming-orchard.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    fill={true}
                    className={styles.img}
                />
            </div>

            <div className={styles.textContainer}>
                <h1 className={styles.title}>Title</h1>
                <div className={styles.detail}>
                    <Image
                        src="https://images.pexels.com/photos/16844098/pexels-photo-16844098/free-photo-of-woman-sitting-in-blossoming-orchard.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        width={50}
                        height={50}
                        className={styles.avatar}
                    />
                    <div className={styles.detailText}>
                        <h2 className={styles.detailTitle}>Author</h2>
                        <p className={styles.detailValue}>Ray Ng</p>
                    </div>
                    <div className={styles.detailText}>
                        <h2 className={styles.detailTitle}>Published</h2>
                        <p className={styles.detailValue}>01.01.2024</p>
                    </div>
                </div>
                <div className={styles.content}>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quos officiis officia expedita excepturi illum amet
                        suscipit perspiciatis explicabo nihil dignissimos
                        incidunt accusamus quis sit fugiat, laborum omnis soluta
                        est facilis.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SinglePostPage;
