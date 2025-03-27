import Map from '@/components/ui/Map';
import scss from './Location.module.scss';

const Location = () => {
	return (
		<section id={scss.location}>
			<h2>Наши филиалы</h2>
			<Map />
		</section>
	);
};

export default Location;
