import styled, { injectGlobal, keyframes } from 'styled-components';

export const FadeIn = keyframes`
  from {
      opacity:0;
  }
  to {
      opacity:1;
  }
`;

export const Message = styled.div`
  display: ${(props)=>props.show && props.show};
  color: black;
  background-color: #ffebc8;
  border-radius: 4px;
  padding: 20px;
  width: 29%;
  margin-left: 34%;
  background-position: center;
  font-size: 18px;
  text-align: center;
  animation: ${FadeIn} 2s;
  -moz-animation: ${FadeIn} 2s; /* Firefox */
  -webkit-animation: ${FadeIn} 2s; /* Safari and Chrome */
  -o-animation: ${FadeIn} 2s; /* Opera */
`;

export const Container = styled.div`
  position:relative;
  width: 90%;
  margin-left: 5%;
  padding:0;
  @media(max-width: 1000px){
    width: 100%;
    margin: 0;
  }
`;

export const GlobalStyle = injectGlobal`
  html,body,p,label,input {
    margin:0;
    padding:0;
    font-family: sans-serif;
    font-size: 18px;
    font-style: normal;
    @media(max-width: 1000px){
      font-size: 36px;
    }
  }
`;

export const InputLabel = styled.label`
  font-style: normal;
  font-size: 20px;
  @media(max-width: 1000px){
    font-size: 1.5em;
  }
`;

export const Radio =  styled.input`
  text-align: left;
  font-size: 1em;
  width: 1em;
  height: 0.8em;
  margin-left: 1em;
  cursor: pointer;
  @media(max-width: 1000px){
    margin-left: 1.5em;
  }
`;

export const Title = styled.h1`
  text-align: center;
  color: #7c7c7c;
  font-style: normal;
  font-size: 26px;
  @media(max-width: 1000px){
    letter-spacing: 3.75px;
    font-size: 36px;
    line-height: 32px;
  }
`;

export const Subtitle = styled.p`
  text-align: center;
  color: #7c7c7c;
  font-weight:bold;
  font-size:18px;
  font-style: normal;
  @media(max-width: 1000px){
    font-size: 25px;
  }
`;
