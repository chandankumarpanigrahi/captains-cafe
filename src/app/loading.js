import styles from "./loading.module.css"
export default function Loading() {
    return (
        <div className="flex h-screen justify-center items-center">
            <div className={styles.loader}></div>
        </div>
    );
}