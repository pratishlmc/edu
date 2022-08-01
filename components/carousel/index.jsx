import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SliderImage from "./SliderImage";

function Carousel() {
	return (
		<div className="">
			<Swiper
				modules={[Navigation, Pagination]}
				spaceBetween={0}
				slidesPerView={1}
				autoplay={true}
				navigation
				pagination={{ clickable: true }}
				onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={() => console.log("slide change")}
			>
				<SwiperSlide>
					<SliderImage image="https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
				</SwiperSlide>
				<SwiperSlide>
					<SliderImage image="https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
				</SwiperSlide>
				<SwiperSlide>
					<SliderImage image="https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
				</SwiperSlide>
			</Swiper>
		</div>
	);
}

export default Carousel;
