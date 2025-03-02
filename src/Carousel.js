import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = () => {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
      <div>
        <img src="https://storage.googleapis.com/twg-content/images/2019-07-05_Almacenes_Exito.width-1200.jpg" alt="Ad 1" />
      </div>
      <div>
        <img src="https://img.global.news.samsung.com/ar/wp-content/uploads/2024/06/KV_Galaxy-Creators-3.0_16x9_ES_LUCIANO.png" alt="Ad 2" />
      </div>
      <div>
        <img src="https://img.global.news.samsung.com/global/wp-content/uploads/2025/02/Samsung-Mobile-Samsung-Wallet-Samsung-Digital-Key-Expanding-Support-for-Select-Volvo-Cars-and-Polestar-Vehicles_main4.jpg" alt="Ad 3" />
      </div>
    </Carousel>
  );
};

export default ImageCarousel;