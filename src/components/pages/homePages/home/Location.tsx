import Map from '@/components/ui/map/Map';
import scss from './Location.module.scss';

const Location = () => {
	return (
		<div className={scss.location}>
			<h2>Наши филиалы</h2>
			<Map />
		</div>
	);
};

export default Location;
