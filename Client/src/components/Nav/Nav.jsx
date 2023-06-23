import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import style from './Nav.module.css';
import axios from 'axios';
import { useState } from 'react';

const Nav = ({ onSearch }) => {
	const [characters, setCharacters] = useState([]);

	function generateRandomId() {
		return Math.floor(Math.random() * 826) + 1;
	}

	const handleAddRandomCharacter = () => {
		const randomId = generateRandomId();
		axios(`https://rickandmortyapi.com/api/character/${randomId}`)
			.then(({ data }) => {
				if (data.name) {
					const existe = characters.some((char) => char.id === data.id);
					if (existe) {
						window.alert('¡Este personaje ya está en la lista!');
					} else {
						setCharacters((oldChars) => [...oldChars, data]);
					}
				} else {
					window.alert('¡No se encontraron personajes con este ID!');
				}
			})
			.catch((error) => {
				console.error('Error al obtener el carácter:', error.message);
				window.alert('¡Error al obtener los datos del carácter!');
			});
	};

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
			<button
				className={style.aboutButton}
				onClick={() => {
					handleAddRandomCharacter();
					onSearch(generateRandomId());
				}}>
				Random Characters
			</button>
		</nav>
	);
};

export default Nav;
