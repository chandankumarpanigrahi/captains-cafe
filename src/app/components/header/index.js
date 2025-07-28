import styles from "./style.module.css";
import logo from "../../../assets/images/logo.png";
import Image from "next/image";

export default function MainHeader() {
    return (
        <div className={`${styles.header} py-2`}>
            <div className={`${styles.logo_area}`}>
                <Image
                    src={logo}
                    className={styles.logo}
                    width={110}
                    height={110}
                    alt="Logo"
                />
            </div>
        </div>
    );
}