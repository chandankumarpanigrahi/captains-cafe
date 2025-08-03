import React from 'react'
import styles from "./style.module.css"

const Footer = () => {
    return (
        <div className={`${styles.footer} mt-20 w-full relative flex justify-center`}>
            <div className="container">
                <h1 className="text-white text-center p-3">This is Footer</h1>
            </div>
        </div>
    )
}

export default Footer
