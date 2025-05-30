import React from 'react'
import SectionTitle from '../components/SectionTitle'

const About = () => {
    return (
        <div className="main about">
            <div className='content-inner'>
                <SectionTitle title="About" subTitle="내가 할 수 있는 과목 스킬입니다." />
                <div>About 본문</div>
            </div>
        </div>
    )
}

export default About
