import React from 'react';
import SectionWrapper from '../../components/common/sectionWrapper';
import { Columns } from 'react-bulma-components';
import * as S from './styles';

const HomeScreen = () => {
  return (
    <SectionWrapper>
      <Columns>
        <Columns.Column>
          <S.MainHeading className='has-text-weight-light has-text-centered has-text-white'>
            SEU APP DE <br/> <span className="has-text-success">MÚSICA</span>
          </S.MainHeading>
        </Columns.Column>
      </Columns>
      <Columns className="is-centered is-mobile">
        <Columns.Column mobile={{ size: 8, offset: 1 }} desktop={{ size: 4, offset: 2 }}>
          <S.DescriptionList className='has-text-white'>
            <li>Suas músicas <b>Favoritas</b></li>
            <li>Seus <b>Podcasts</b></li>
            <li>Os <b>Lançamentos</b></li>
            <li>As novas <b>Descobertas</b></li>
          </S.DescriptionList>
        </Columns.Column>
      </Columns>
      <Columns className="has-text-centered">
        <Columns.Column>
          <a href="users/sign_up">
            <S.ButtonSubscribe className="is-success is-outlined is-large has-text-white">
              CADASTRAR AGORA
            </S.ButtonSubscribe>
          </a>
        </Columns.Column>
      </Columns>
    </SectionWrapper>
  );
}
export default HomeScreen;