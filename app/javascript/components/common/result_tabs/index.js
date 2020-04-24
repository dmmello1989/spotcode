import React, { Fragment, useState, useEffect } from 'react';
import { Columns, Tabs } from 'react-bulma-components';
import Album from '../../common/album';
import Musics from '../../musics';
import * as S from './styles';

const ResultsTabs = (props) => {
  const [active_tab, setActiveTab] = useState("albums");
  const [albums, setAlbums] = useState([]);

  const mapAlbums = () => {
    setAlbums(props.albums.map((album, key) =>
      <Columns.Column desktop={{ size: 3 }} mobile={{ size: 6 }} key={key}>
        <Album artist_name={album.artist_name} title={album.title} cover_url={album.cover_url} id={album.id} />
      </Columns.Column>
    ));
  }

  useEffect(() => {
    mapAlbums();
  }, [props.albums]);


  return (
    <Fragment>
      <Tabs
        style={{ display: props.albums.length || props.artists.length || props.songs.length ? '' : 'none' }}
        align='centered' size='medium'>
        <S.CustomTab active={active_tab == 'albums' ? true : false} onClick={() => setActiveTab('albums')}>
          Álbums
        </S.CustomTab>
        <S.CustomTab active={active_tab == 'artists' ? true : false} onClick={() => setActiveTab('artists')}>
          Artistas
        </S.CustomTab>
        <S.CustomTab active={active_tab == 'songs' ? true : false} onClick={() => setActiveTab('songs')}>
          Músicas
        </S.CustomTab>
      </Tabs>

      <div>
        <div style={{ display: active_tab != 'albums' ? "none" : "" }}>
          <Columns className="columns is-mobile is-multiline">
            {albums}
          </Columns>
        </div>

        <div style={{ display: active_tab != 'artists' ? "none" : "" }}>
          <div className="columns is-mobile is-multiline">
            Artists
          </div>
        </div>

        <div style={{ display: active_tab != 'songs' ? "none" : "" }}>
          <div className="columns is-multiline">
            <div className="column is-12">
              <Musics songs={props.songs || []} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ResultsTabs;