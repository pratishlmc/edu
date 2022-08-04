import Head from "next/head";
import Carousel from "../components/carousel";
import Header from "../components/Header";
import SlideNews from "../components/marquee";
import EventsNews from "../components/events_and_news";

const Home = () => {
	return (
		<div className="">
			<Head>
				<title>Nobel Academy</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<Carousel />
			<SlideNews />
			<div className="p-3">
				<EventsNews/>
			</div>
		</div>
	);
};

export default Home;
