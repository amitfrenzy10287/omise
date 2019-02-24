import styled, { injectGlobal, keyframes } from 'styled-components';

export const Card = styled.div`
  position:relative;
  display: inline-block;
  margin:10px;
  min-width: calc(50% - 20px);
  border-radius: 4px;
  box-shadow: #ccc 1px 2px 8px;
  @media(max-width:1000px){
    display:block;
    width: calc (100% - 10px);
  }
`;

export const Button = styled.button`
    padding: 0.5em 1em;
    border: solid 1px #000bff;
    outline: 0;
    background: #fff;
    color: #000bff;
    border-radius: 3px;
    cursor: pointer;
    @media(max-width: 1000px){
      display: ${(props)=>props.type && props.type === 'payment' ? 'inline-block':'block'};
      width: ${(props)=>props.type && props.type === 'payment' ? 'auto':'100%'};
      padding: ${(props)=>props.type && props.type === 'payment' ? 'none':'19px'};
      font-style: normal;
      font-size: 23px;
    }
`;


export const Slide = keyframes`
  100% { left: 0; }
`;

export const FadeIn = keyframes`
  from {
      opacity:0;
  }
  to {
      opacity:1;
  }
`;

export const PaymentWrapper = styled.div`
  display: none;
  position: absolute;
  top:0;
  left:100%;
  width: 100%;
  height: 100%;
  opacity:0.9;
  background-color:#fff;
  -webkit-animation: ${Slide} 0.5s forwards;
  animation: ${Slide} 0.5s forwards;
`;

export const CardFooter = styled.div`
  position: relative;
  padding: 25px 15px 25px 15px;
  cursor: pointer;
  @media(max-width: 1000px){
    padding: 25px 0px 32px 21px;
  }
`;

export const FooterTitle = styled.span`
  padding:0;
  margin:0;
  text-align:left;
  font-size: 16px;
  color: #7c7c7c;
  @media(max-width:1000px){
    font-size: 25px;
    font-weight: bold;
  }
`;

export const CardBodyImage = styled.div`
  background-image: url(${(props) => props.src ? props.src : ''});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  width: 100%;
  height: 315px;
  object-fit: contain;
  background-color:#000;
  border-top-left-radius:4px;
  border-top-right-radius:4px;
  cursor: pointer;
  @media(max-width:1000px){
    display:block;
    width: 100%;
  }
`;

export const PaymentBodyWrapper = styled.div`
  padding: 15% 10%;
  text-align: center;
  cursor: pointer;
  opacity: 1;
  line-height: 32px;
  @media(max-width: 1000px){
    font-style:normal;
    font-size: 21px;
  }
`;

export const BtnPaymentWrapper = styled.div`
  margin:20px;
  text-align: center;
`;

export const CloseButton = styled.div`
  position:absolute;
  top: 20px;
  right: 20px;
  background-image: url(images/close.png);
  background-repeat: no-repeat;
  background-size: 1em 1em;
  background-position: center;
  width: 1em;
  height: 1em;
  object-fit: contain;
  cursor:pointer;
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

export const SelectAmount =  styled.p`
  font-style: normal;
  font-size: 20px;
  @media(max-width: 1000px){
    font-size: 36px;
    margin-bottom: 1em;
  }
`;

export const FooterButtonWrapper = styled.div`
  position: absolute;
  right: 20px;
  top: 25px;
  @media(max-width: 1000px){
    display: block;
    position: relative;
    right: 10px;
  }
`;

export const commonStyles = {
  show:{
    display: 'block',
  },
  hide:{
    display: 'none',
  },
};
