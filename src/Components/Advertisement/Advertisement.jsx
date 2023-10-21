import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import PropTypes from 'prop-types';

import AddvertisePage from '../AdvertisePage/AddvertisePage';
import { useEffect, useState } from 'react';
export default function Advertisement({ name }) {
  const [addvertises, setAdvertise] = useState([]);
  useEffect(() => {
    fetch(`https://brand-shop-assignment-server-b37868htx-soyeb-suvos-projects.vercel.app/advertise/${name}`)
      .then(res => res.json())
      .then(data => {
        setAdvertise(data)
      })
  }, [name])
  return (
    <div>
      <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {
          addvertises?.map(addvertise => <SwiperSlide key={addvertise._id}>
            <AddvertisePage addvertise={addvertise}></AddvertisePage>
          </SwiperSlide>)
        }


      </Swiper>
    </div>
  )
}
Advertisement.propTypes = {
  name: PropTypes.string
}