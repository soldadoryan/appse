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
  min-height: 35vh;
  top: 20vh;
  left: 35vw;
  z-index: 1051;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 20px;

  h3 {
    color: gray;
  }

  .resultado {
    background-color: #f0f0f0;
    padding: 20px;
    margin: 20px 0;
    width: 80%;
  }

  small {
    color: gray;
    margin-top: 10px;
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