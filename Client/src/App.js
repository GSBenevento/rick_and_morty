import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';

const URL = 'http://localhost:3001/rickandmorty/login/';

function App() {
	const [characters, setCharacters] = useState([]);
	const location = useLocation();
	const [access, setAccess] = useState(false);
	const navigate = useNavigate();

	const login = async (userData) => {
		try {
			const { email, password } = userData;
			const { data } = await axios(URL + `?email=${email}&password=${password}`);
			const { access } = data;
			setAccess(access);
			access && navigate('/home');
		} catch (error) {
			console.log(error.menssagge);
		}
	};

	useEffect(() => {
		!access && navigate('/');
	}, [access, navigate]);

	const onSearch = async (id) => {
		try {
			const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
			if (data.name) {
				setCharacters((oldChars) => [...oldChars, data]);
			}
		} catch (error) {
			alert('¡No hay personajes con ese ID!');
		}
	};

	const onClose = (id) => {
		const charactersFiltered = characters.filter((character) => character.id !== Number(id));
		setCharacters(charactersFiltered);
	};

	return (
		<div className='App'>
			{location.pathname !== '/' && <Nav onSearch={onSearch} />}
			<Routes>
				<Route path='/home' element={<Cards characters={characters} onClose={onClose} />}></Route>
				<Route path='/about' element={<About />}></Route>
				<Route path='/detail/:id' element={<Detail />}></Route>
				<Route path='/' element={<Form login={login} />}></Route>
				<Route path='/favorites' element={<Favorites />}></Route>
			</Routes>
		</div>
	);
}

export default App;
