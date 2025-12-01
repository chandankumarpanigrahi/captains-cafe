import React from 'react'

const CardHeading = ({ title, bottomLine = false }) => {
    return (
        <>
            <h2 className='text-blue-900 font-semibold text-[18px]'>{title}</h2>
            <hr className={`${bottomLine ? 'block' : 'hidden'}`}/>
        </>
    )
}

export default CardHeading