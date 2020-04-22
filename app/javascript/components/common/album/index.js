import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Heading } from 'react-bulma-components';
import * as S from './styles';

const Album = (props) => {
  return (
    <Link to={`/album/${props.id}`}>
      <Image src={props.cover_url} />
      <S.DivSpaced>
        <Heading size={6} className='has-text-white'>{props.title}</Heading>
        <Heading size={6} className='has-text-white' subtitle>{props.artist_name}</Heading>
      </S.DivSpaced>
    </Link>
  );
}
export default Album;
