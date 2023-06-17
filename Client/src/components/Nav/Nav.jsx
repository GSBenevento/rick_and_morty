import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import style from './Nav.module.css';

const Nav = ({ onSearch }) => {
  return (
    //className={style.nav}
    <nav className={style.body}>
      <SearchBar onSearch={onSearch} />
      <butto className={style.aboutButton}>
        <Link to='/about' className={style.buttonLink}>
          About
        </Link>
      </butto>
      <button className={style.aboutButton}>
        <Link to='/home' className={style.buttonLink}>
          Home
        </Link>
      </button>
      <button className={style.aboutButton}>
        <Link to='/favorites' className={style.buttonLink}>
          Favorites
        </Link>
      </button>
    </nav>
  );
};

export default Nav;
