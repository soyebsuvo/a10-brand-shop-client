import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import FirstBanner from '../FirstBanner/FirstBanner';
import SecondBanner from '../SecondBanner/SecondBanner';
import ThirdBanner from '../ThirdBanner/ThirdBanner';
export default function Banner() {
  return (
    <div>
      <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <FirstBanner></FirstBanner>
        </SwiperSlide>
        <SwiperSlide>
            <SecondBanner></SecondBanner>
        </SwiperSlide>
        <SwiperSlide>
            <ThirdBanner></ThirdBanner>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
