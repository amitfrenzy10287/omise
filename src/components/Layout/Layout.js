import React from 'react';
import {NavLink} from 'react-router-dom';
import {
  Navigation,
  Menu,
  Title,
  Container,
  StyledLink,
} from './style';

const Layout = (props) => {
  const rando = btoa(Math.random())
  return(
    <div>
      <Navigation>
        <Title> Omise Tamboon React </Title>
        <Menu>
          <StyledLink to="/" activeClassName={rando}>
            Home
          </StyledLink>
        </Menu>
      </Navigation>
      <Container>
        {props.children}
      </Container>
    </div>
  );
};

export default Layout;
