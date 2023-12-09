import React from 'react'
import { HeaderIcon } from './HeaderIcon'
import UnionSVG from '../assets/SVG/Union.svg'
import BagSVG from '../assets/SVG/Group2.svg'

export const HeaderIcons = () => {
    return (
        <div className=" flex flex-1 justify-end  ">
            <HeaderIcon importSVG={UnionSVG}/>
            <HeaderIcon importSVG={BagSVG}/>
        </div>
    )
}
