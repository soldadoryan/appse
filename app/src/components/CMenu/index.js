import React, { useState } from 'react';

import Sistema from '../Sistema';

import { Menu, Button } from './styles';
import {
  IoIosList,
  IoIosHelpCircleOutline,
  IoMdInformationCircleOutline,
  IoIosHammer,
  IoMdThumbsUp,
  IoIosPlay
} from 'react-icons/io';

export default function CMenu({ history }) {
  const [run, setRun] = useState(false);

  return (
    <>
      {(run) && <Sistema close={() => setRun(false)} />}
      <Menu>
        <Button to='/variaveis'>
          <IoIosList />
          <span>Variáveis</span>
        </Button>
        <Button to='/questoes'>
          <IoIosHelpCircleOutline />
          <span>Questões</span>
        </Button>
        <Button to='/departments'>
          <IoMdInformationCircleOutline />
          <span>Resultados</span>
        </Button>
        <Button to='/departments'>
          <IoIosHammer />
          <span>Regras</span>
        </Button>
        <Button to='/departments'>
          <IoMdThumbsUp />
          <span>Soluções</span>
        </Button>
        <Button onClick={() => setRun(true)}>
          <IoIosPlay />
          <span>Iniciar sistema</span>
        </Button>
      </Menu >
    </>
  );
}
