import Card from '../Card/Card';
import { useSelector, useDispatch } from 'react-redux';
import { orderCards, filterCards, resetCards } from '../../redux/actions';
import style from './Favorites.module.css';

export default function Favorites() {
	const myFavorites = useSelector((state) => state.myFavorites);
	const dispatch = useDispatch();

	const handleSort = (event) => {
		dispatch(orderCards(event.target.value));
	};

	const handleFilter = (event) => {
		dispatch(filterCards(event.target.value));
	};

	const handleReset = (event) => {
		dispatch(resetCards());
	};

	return (
		<div>
			<select placeholder='Gender' onChange={handleFilter}>
				{['Male', 'Female', 'unknown', 'Genderless'].map((gender) => (
					<option value={gender}>{gender}</option>
				))}
			</select>

			<select placeholder='Order' onChange={handleSort}>
				<option value={'A'}>Ascendente</option>
				<option value={'D'}>Descendente</option>
			</select>
			<button className={style.button} onClick={handleReset}>
				Reset Filters
			</button>
			<div className={style.containerFav}>
				{myFavorites?.map((fav) => {
					return (
						<Card
							key={fav.id}
							id={fav.id}
							name={fav.name}
							species={fav.species}
							gender={fav.gender}
							image={fav.image}
						/>
					);
				})}
			</div>
		</div>
	);
}
