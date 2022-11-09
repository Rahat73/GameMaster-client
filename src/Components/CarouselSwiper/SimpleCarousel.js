import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css/effect-coverflow";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./CarouselSwiper.css";
import { FaEye, FaLightbulb, FaChalkboardTeacher, FaListAlt, FaBullseye } from "react-icons/fa";
import SwiperCore, {
    EffectCoverflow,
    Pagination,
    Navigation
} from "swiper/core";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const SimpleCarousel = () => {
    return (
        <div className='mx-auto w-10/12 py-10 my-10 bg-black-700 bg-opacity-70 bg-clip-padding backdrop-filter backdrop-blur-md border-y border-red-500'>
            <h1 className='text-4xl font-semibold mb-10 underline'>Each Service Includes</h1>
            <div className="">
                <Swiper
                    navigation={true}
                    effect={"coverflow"}
                    centeredSlides={true}
                    slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
                    loop={true}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true
                    }}
                    pagination={{
                        clickable: true
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className=' bg-red-600 bg-opacity-60 bg-clip-padding backdrop-filter backdrop-blur-md py-10'>
                            <div className='flex flex-col items-center'>
                                <FaEye className='text-8xl'></FaEye>
                                <h1 className='text-4xl my-5'>Daily <br /> <span className='text-orange-400'>30 </span>minutes of <br /> <span className='text-orange-400'>OBSERVATION</span></h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' bg-red-600 bg-opacity-60 bg-clip-padding backdrop-filter backdrop-blur-md py-10'>
                            <div className='flex flex-col items-center'>
                                <FaLightbulb className='text-8xl'></FaLightbulb>
                                <h1 className='text-4xl my-5'>Daily <br /> <span className='text-orange-400'>20 </span>minutes of <br /> <span className='text-orange-400'> TIPS & TRICKS</span></h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' bg-red-600 bg-opacity-60 bg-clip-padding backdrop-filter backdrop-blur-md py-10'>
                            <div className='flex flex-col items-center'>
                                <FaChalkboardTeacher className='text-8xl'></FaChalkboardTeacher>
                                <h1 className='text-4xl my-5'>Daily <br /> <span className='text-orange-400'>1-2 </span>match in game<br /> <span className='text-orange-400'>COACHING</span></h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' bg-red-600 bg-opacity-60 bg-clip-padding backdrop-filter backdrop-blur-md py-10'>
                            <div className='flex flex-col items-center'>
                                <FaListAlt className='text-8xl'></FaListAlt>
                                <h1 className='text-4xl my-5'>Weekly <br /> <span className='text-orange-400'>1 </span>day progress<br /> <span className='text-orange-400'>EVALUATION</span></h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' bg-red-600 bg-opacity-60 bg-clip-padding backdrop-filter backdrop-blur-md py-10'>
                            <div className='flex flex-col items-center'>
                                <FaBullseye className='text-8xl'></FaBullseye>
                                <h1 className='text-4xl my-5'>Daily <br /> <span className='text-orange-400'>15 </span>minutes of <br /> <span className='text-orange-400'>DRILL PRACTICE</span></h1>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default SimpleCarousel;