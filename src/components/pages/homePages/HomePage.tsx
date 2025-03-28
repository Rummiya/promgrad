import AboutUs from './home/AboutUs';
import Contact from './home/Contact';
import AboutImage from './home/ImageAbout';
import Location from './home/Location';
import Portfolio from './home/Portfolio';
import Welcome from './home/Welcome';

const HomePage = () => {
	return (
		<>
			<Welcome />
			<AboutUs />
			<AboutImage />
			<Portfolio />
			<Contact />
			<Location />
		</>
	);
};

export default HomePage;
