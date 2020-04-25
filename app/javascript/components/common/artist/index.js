import React from 'react'
import { Image, Heading } from 'react-bulma-components'
import { Link } from 'react-router-dom'
import * as S from './styles';

const Artist = (props) =>{
  return(
    <Link to={`/artists/${props.id}`}>
      <Image src={props.photo_url}></Image>
      <S.DivVSpaced>
        <Heading size={6} className='has-text-white' subtitle>{props.name}</Heading>     
      </S.DivVSpaced>
    </Link>
  );
}

export default Artist;