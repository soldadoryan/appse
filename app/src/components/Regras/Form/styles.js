import styled from 'styled-components';

import colors from '../../../presets/colors';

export const WrapForm = styled.form`
  h2 { color: ${colors.texts}; margin-bottom: 25px; }\

  .separator {
    margin: 20px 0;
    width: 100%;
    height: 1px;
    border-top: 1px dashed #e7e7e7;
  }

  .previewregra {
    width: 100%;
    height: 300px;
    border: 1px solid gray;
    background-color: #e7e7e7;
    padding: 10px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: inset 1px 1px 5px 0px rgba(0,0,0,0.2); 

    button {
      background-color: white;
      border: 0;
      display: inline;
      width: 15px;
      height: 15px;
      border-radius: 50%; 
      line-height: 8px;
      box-shadow: 0 3px 30px rgba(0,0,0,.1), 0 3px 20px rgba(0,0,0,.1);
      border: 1px solid ${colors.secondary};
      cursor: pointer;
    }

    strong {
      color: ${colors.secondary};
    }

    span {
      margin-left: 20px;
    }
  }
`;
