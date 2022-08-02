import Head from "next/head";
import Carousel from "../components/carousel";
import Header from "../components/Header";
import SlideNews from "../components/marquee";

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
		</div>
	);
};

export default Home;
