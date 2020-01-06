import React from 'react';
import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';

import { Container, Title, Icon, RightContent, LeftContent } from './styles';

import IconPerfil from '../../assets/img/icon_perfil.svg'
import Logo from '../../assets/img/logo-clock.svg';

export default function Header({ children, icon, title }) {
  // const userData = useSelector(state => state.authReducer.authentication);
  return (
    <Container>
      <LeftContent>
        <Icon width="50px" src={Logo} alt="Configuração" />
        <Title>Time Own</Title>
      </LeftContent>
      <RightContent>
        <Icon width="45px" src={IconPerfil} alt="Foto" />
      </RightContent>
    </Container>
  );
}

Header.defaultProps = {
  children: undefined,
  icon: undefined,
  title: undefined,
};

Header.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.string,
  title: PropTypes.string,
};