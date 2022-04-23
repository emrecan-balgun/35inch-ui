import './slider.css';
import Header from '../../Container/Header2/Header2';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

function Slider() {
  return (
    <>
    <Header />
        <div className="kapsayiciDiv">
            <div className="buAnaDiv">
                <span className="slider-title">Chekici</span>
            </div>
            <Swiper
                spaceBetween={200}
                slidesPerView={3}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                >
                <SwiperSlide><img src="https://i.picsum.photos/id/211/536/354.jpg?hmac=TcakWSrStJEMbi9ayB_hE4Yh_YIU7V3nXYaxmLtQYpk" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.picsum.photos/id/450/536/354.jpg?hmac=9m3LrKj4vt0wUGoG8Eqmbw1V0LCJ9VKjotelYl8kLA8" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.picsum.photos/id/441/536/354.jpg?hmac=qHaUqO3vqlz-C811TXJPtRw-FV4ciRCazlDZb1gdodg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.picsum.photos/id/186/536/354.jpg?hmac=aEPX-eFEnFqdxMu_-GJMkBRtvoXiT8bWqXajBCPldpI" alt="" /></SwiperSlide>
                ...
            </Swiper>
        </div>
    </>
  )
}

export default Slider