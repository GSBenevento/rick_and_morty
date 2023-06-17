import img from '../../assets/hqdefault.jpg';
import style from './About.module.css';

const About = () => {
  return (
    <div className={style.body}>
      <img src={img} alt='' />
      <div className={style.description}>
        <h1>Me llamo Gabriel Benevento, tengo 27 años y blablabla...</h1>
      </div>
    </div>
  );
};

export default About;
