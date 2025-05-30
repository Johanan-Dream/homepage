import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './scss/PortfolioSwiper.scss'

interface PortFolio {
    id: number;
    title: string;
    des: string;
    skill: string;
    webUrl: string;
    gitUrl: string;
}
const PortFolioList: PortFolio[] = [
    {
        id: 0, title: "제목1", des: "사이트를 리뉴얼함", skill: "React+Typescript", webUrl: "https://www.naver.com", gitUrl: ""
    },
    {
        id: 1, title: "제목2", des: "사이트를 리뉴얼함", skill: "React+Typescript", webUrl: "https://www.naver.com", gitUrl: ""
    },
    {
        id: 2, title: "제목3", des: "사이트를 리뉴얼함", skill: "React+Typescript", webUrl: "https://www.naver.com", gitUrl: ""
    }
];
const PortfolioSwiper = () => {
    return (
        <div className='main port-swiper'>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{ delay: 3000 }}
                navigation
                // 간격 : 1개씩 보여주는 경우 필요없음
                //spaceBetween={30}
                // 몇개씩 보여줄지
                slidesPerView={1}
                loop={true}
            >
                {PortFolioList.map((item) => (
                    <SwiperSlide>
                        <p><img src={`./images/portfolio_0${item.id + 1}.jpg`}
                            alt={item.title} /></p>
                        <div className="text-box">
                            <h3>{item.title}</h3>
                            <p>{item.des}</p>
                            <div className="btn-wrap">
                                <span>{item.skill}</span>
                                <ul>
                                    <li><a href={item.gitUrl}>git</a></li>
                                    <li><a href={item.webUrl}>web</a></li>
                                </ul>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default PortfolioSwiper
