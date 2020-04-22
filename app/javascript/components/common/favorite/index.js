import React, { Fragment, useState } from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import FavoritesService from '../../../services/favorites';

const Favorite = (props) => {
  const [favorited, setFavorited] = useState(props.favorited);

  async function unfavorite() {
    await FavoritesService.delete(props.kind, props.id);
    setFavorited(false);
  }

  async function favorite() {
    await FavoritesService.create(props.kind, props.id);
    setFavorited(true);
  }

  let FavoriteButton;
  if (favorited)
    FavoriteButton = <FaHeart size='25px' className='has-text-white' onClick={() => unfavorite()} />
  else
    FavoriteButton = <FaRegHeart size='25px' className='has-text-white' onClick={() => favorite()} />

  return (
    <Fragment>
      {FavoriteButton}
    </Fragment>
  );
}
export default Favorite;