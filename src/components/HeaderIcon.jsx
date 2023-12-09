import React from 'react'

export const HeaderIcon = ({importSVG}) => {
    return (
        <>
            <a href="#" className='ml-12'>
            <img src={importSVG} alt="" />
            </a>
        </>
    )
}