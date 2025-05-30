import React from 'react'
import SectionTitle from '../components/SectionTitle'
import PortfolioSwiper from '../components/PortfolioSwiper'

const PortFolio = () => {
    return (
        <div className="main portfolio">
            <div className='content-inner'>
                <SectionTitle title="Portfolio" subTitle="저의 포트폴리오를 소개합니다다" />
                <div>
                    <PortfolioSwiper />
                </div>
            </div>
        </div>
    )
}

export default PortFolio
