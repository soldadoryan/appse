import React from 'react';

import CButton from '../CButton';

import { Backdrop, Wrap } from './styles';

export default function Sistema({ close }) {
  return (
    <>
      <Backdrop />
      <Wrap>
        <h3>Sistema Especialista</h3>
        <h2>Você já escovou o dente hoje?</h2>
        <div className='wrapbuttons'>
          <CButton cstyle='primary' title='Sim' />
          <CButton cstyle='danger' title='Não' />
        </div>
        <button onClick={() => close()}>Parar execução do sistema</button>
      </Wrap>
    </>
  );
}
