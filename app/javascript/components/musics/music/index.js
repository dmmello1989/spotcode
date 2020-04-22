import React, { Fragment } from 'react';
import { Heading, Columns } from 'react-bulma-components';
import { FaPlayCircle, FaStopCircle } from "react-icons/fa";
import Favorite from '../../common/favorite';
import * as S from './styles';

const Music = (props) => {
  let PlayingButton;
  if(props.playing) {
    PlayingButton = <FaStopCircle size='45px' className='has-text-white' onClick={() => props.setPlaying([])} />
  } else {
    PlayingButton = <FaPlayCircle size='45px' className='has-text-white' onClick={() => props.setPlaying(props.song)} />
  }

  return (
    <Fragment>
      <Columns className='is-vcentered is-mobile is-centered'>
        <Columns.Column desktop={{ size: 1 }} mobile={{ size: 2 }} >
          {PlayingButton}
        </Columns.Column>
        <Columns.Column desktop={{ size: 4 }} mobile={{ size: 8 }}>
          <Columns className='is-vcentered is-mobile'>
            <Columns.Column desktop={{ size: 8 }} mobile={{ size: 8 }}>
              <Heading size={5} className='has-text-white'>
                {props.song.title}
              </Heading>
              <S.CustomSubHeading size={6} className='has-text-white' subtitle>
                {props.song.artist_name}
              </S.CustomSubHeading>
            </Columns.Column>
            <Columns.Column desktop={{ size: 4 }} mobile={{ size: 4 }} className='is-pulled-right has-text-right'>
              <Favorite id={props.song.id} kind='songs' favorited={props.song.favorite}/>
            </Columns.Column>
          </Columns>
          <S.MusicSeparator />
        </Columns.Column>
      </Columns>
    </Fragment>
  )
}

export default Music;
