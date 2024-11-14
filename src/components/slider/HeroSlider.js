import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper'
import Image from 'next/image'

const common =
  'https://img.freepik.com/premium-vector/solid-dim-gray-color-background-blank-radial-gradient-wallpaper-4k-8k-big-screen_927063-141.jpg'

const images = [
  // {
  //   src: '/static/product/n.jpg',
  //   title: 'Product One',
  //   details: 'Details for Product One',
  // },
  {
    src: common,
    title: 'Product One',
    details: 'Details for Product One',
  },
  {
    src: common,
    title: 'Product One',
    details: 'Details for Product One',
  },
  {
    src: common,
    title: 'Product One',
    details: 'Details for Product One',
  },
  {
    src: common,
    title: 'Product Two',
    details: 'Details for Product Two',
  },
  {
    src: common,
    title: 'Product Three',
    details: 'Details for Product Three',
  },
  {
    src: common,
    title: 'Product Three',
    details: 'Details for Product Three',
  },
  {
    src: common,
    title: 'Product Three',
    details: 'Details for Product Three',
  },
]

SwiperCore.use([Pagination, Navigation, Autoplay])

const HeroSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      style={{
        borderRadius: '0.5rem',
        borde: '4px solid black',
      }}
    >
      {images.map((item, index) => (
        <SwiperSlide
          key={index}
          className="swiper-slide flex flex-col justify-center items-center"
        >
          <div className="relative h-[250px] w-2/3 overflow-hidden border-black border-4 rounded-lg">
            <Image
              src={item.src}
              alt={`product-${index}`}
              layout="fill"
              objectFit="cover"
              className="mx-auto"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default HeroSlider
