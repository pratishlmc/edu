import "../styles/globals.css";
import BackToTop from "../components/BackToTop"

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />
			<BackToTop/>
		</>
	);
}

export default MyApp;
