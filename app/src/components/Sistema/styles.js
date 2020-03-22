import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1050;
`;

export const Wrap = styled.div`
  position: fixed;
  width: 30vw;
  height: 30vh;
  top: 35vh;
  left: 35vw;
  z-index: 1051;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    color: gray;
  }

  .wrapbuttons {
    display: flex;
    margin-top: 25px;
    
    button { margin: 0 10px; }
    margin-bottom: 15px;
  }

  & > button {
    background-color: transparent;
    outline: none;
    border: 0;
    color: blue;
    cursor: pointer;
  }
`;