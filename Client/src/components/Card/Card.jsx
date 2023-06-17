import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import style from './Card.module.css';

function Card({
  id,
  name,
  species,
  gender,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) {
  const [isFav, setIsFav] = useState(false);
  const [closeBtn, setCloseBtn] = useState(true);

  useEffect(() => {
    if (!onClose) {
      setCloseBtn(false);
    }
  });

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ id, name, species, gender, image });
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={style.container}>
      <img className={style.img} src={image} alt='' />

      <div className={style.info}>
        {closeBtn && (
          <button className={style.btnClose} onClick={() => onClose(id)}>
            X
          </button>
        )}

        <button className={style.btnFav} onClick={handleFavorite}>
          {isFav ? '❤️' : '🤍'}
        </button>

        <Link className={style.name} to={`/detail/${id}`}>
          <h2>{name}</h2>
        </Link>

        <div className={style.description}>
          <h2>{species}</h2>
          <h2>{gender}</h2>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchProps)(Card);
