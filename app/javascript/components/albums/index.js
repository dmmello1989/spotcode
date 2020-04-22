import React, { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Heading, Columns, Image } from 'react-bulma-components';
import AlbumsService from '../../services/albums';
import Musics from '../musics';
import * as S from './styles';

const Albums = () => {
  const [album, setAlbum] = useState([]);
  let { id } = useParams();

  async function fetchAlbum() {
    const response = await AlbumsService.show(id);
    setAlbum(response.data);
  }

  useEffect(() => {
    fetchAlbum();
  }, []);

  return (
    <Fragment>
      <Columns className='is-vcentered is-mobile is-centered'>
        <Columns.Column desktop={{ size: 3 }} className='has-text-centered'>
          <Image src={album.cover_url} />
          <S.DivSpaced>
            <Heading size={5} className='has-text-white'>{album.title}</Heading>
            <Heading size={6} subtitle className='has-text-white'>{album.artist_name}</Heading>
          </S.DivSpaced>
        </Columns.Column>
      </Columns>
      <Musics songs={album.songs || []} />
    </Fragment>
  );
}
export default Albums;