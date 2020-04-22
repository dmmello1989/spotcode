import React, { Fragment } from 'react';
import { Container, Columns } from 'react-bulma-components';
import { Link } from 'react-router-dom';
import { FaSearch, FaHome, FaHeart } from 'react-icons/fa';
import * as S from './styles';

const NavbarFooter = () => {

  return (
    <Fragment>
      <S.NavbarWithBorder fixed='bottom' color='dark'>
        <Container>
          <S.ColumnsFullWidth className='is-mobile is-vcentered'>
            <Columns.Column className='has-text-centered'>
              <Link to='/discovery' className='has-text-white'>
                <FaHome size='25px' />
              </Link>
            </Columns.Column>

            <Columns.Column className='has-text-centered'>
              <Link to='/search' className='has-text-white'>
                <FaSearch size='25px' />
              </Link>
            </Columns.Column>

            <Columns.Column className='has-text-centered'>
              <Link to='/favorites' className='has-text-white'>
                <FaHeart size='25px' />
              </Link>
            </Columns.Column>
          
          </S.ColumnsFullWidth>    
        </Container>
      </S.NavbarWithBorder>
    </Fragment>
  );
}
export default NavbarFooter;