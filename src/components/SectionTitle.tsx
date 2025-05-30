import React from 'react'
import "./scss/Title.scss"

const SectionTitle = ({ title, subTitle }: { title: string, subTitle?: string }) => {
    return (
        <div>
            <div className='title-box'>
                <h2 className='title'>{title}</h2>
                <p className="sub-title">{subTitle}</p>
            </div>
        </div>
    )
}

export default SectionTitle
