import Card from '../Card/Card';
import { useSelector, useDispatch } from 'react-redux';
import { orderCards, filterCards, resetCards } from '../../redux/actions';

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
        {['A', 'D'].map((order) => (
          <option value={order}>{order}</option>
        ))}
      </select>
      <button onClick={handleReset}>Reset Filters</button>
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
  );
}

// const mapStateToProps = (state) => {
//   return {
//     myFavorites: state.myFavorites,
//   };
// };

// export default connect(mapStateToProps, null)(Favorites);
