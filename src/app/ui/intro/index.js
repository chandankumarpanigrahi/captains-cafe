import React from 'react'
import styles from "./style.module.css"
import Counters from '../counters'

const Intro = () => {
    return (
        <div className={`${styles.intro_section} container`}>
            <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-2/3">Hello</div>
                <div className="w-1/3 hidden lg:block">Hi</div>
            </div>
        </div>
    )
}

export default Intro
