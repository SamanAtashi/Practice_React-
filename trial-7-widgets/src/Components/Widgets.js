import classes from './Widgets.module.css';
import Clock from './Clock/Clock';
const Widgets = () => {
	return (
		<div className={classes.container}>
			<Clock />
		</div>
	);
};

export default Widgets;
