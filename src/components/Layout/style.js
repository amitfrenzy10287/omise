import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export const Navigation = styled.div`
  display: flex;
  position: static;
  width: 100%;
  height: 60px;
  background: #0012ff;
  color: #fff;
  font-style: normal;
  box-shadow: #ccc 2px 3px 4px;
`;

export const Menu = styled.div`
  position: absolute;
  right: 20px;
  top: 17px;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  & a {
    text-decoration: none;
    color:#fff;
    padding: 20px;
  }
  & a:hover {
    background-color: #ccc;
  }
  @media(max-width: 1000px){
    display: none;
  }
`;

export const StyledLink = styled(NavLink)`
  background-color: #ccc;
  border-bottom: solid 2px #fff;
`;

export const Title = styled.div`
  position: absolute;
  top: 16px;
  left: 20px;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
`;

export const Container = styled.div`
  box-shadow: #ccc 2px 1px 13px;
  min-height: 600px;
  margin: 0 1%;
  border-radius: 4px;
  padding: 16px;
  @media(max-width: 1000px){
    box-shadow: none;
    margin: 0;
    padding: 0;
  }
`;
