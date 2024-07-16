import Features from "./Components/Features";
import Grid1 from "./Components/Grid1";
import Footer from "./Components/Footer";
import Guy from "./Components/Guy";
import HeadphoneView from "./Components/HeadphoneView";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar"

export default function App() {
	return (
		<>
			<NavBar/>
			<Home/>
			<Grid1/>
			<Guy/>
			<Features/>
			<HeadphoneView/>
			<Footer/>
		</>
	);
}
