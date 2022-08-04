import BackToTop from "../components/BackToTop";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />


			<BackToTop />
		</>
	);
}

export default MyApp;
