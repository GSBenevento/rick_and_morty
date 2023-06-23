import img from '../../assets/hqdefault.jpg';
import style from './About.module.css';

const About = () => {
	return (
		<div className={style.body}>
			<img src={img} alt='' />
			<div className={style.description}>
				<h1>Me llamo Gabriel Benevento</h1>
				<h2>
					soy un estuadiante de Henry, al que le gusta programar y que se esta
					esforzando por combertir algo que le gusta en su profesion.
				</h2>
			</div>
		</div>
	);
};

export default About;
