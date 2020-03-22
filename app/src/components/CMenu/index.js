import React from 'react';

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
  return (
    <Menu>

      <Button to='/variaveis'>
        <IoIosList />
        <span>Variáveis</span>
      </Button>
      <Button to='/questoes'>
        <IoIosHelpCircleOutline />
        <span>Questões</span>
      </Button>
      <Button to='/resultados'>
        <IoMdInformationCircleOutline />
        <span>Resultados</span>
      </Button>
      <Button to='/regras'>
        <IoIosHammer />
        <span>Regras</span>
      </Button>
      <Button to='/solucoes'>
        <IoMdThumbsUp />
        <span>Soluções</span>
      </Button>
      <Button to='/departments'>
        <IoIosPlay />
        <span>Iniciar sistema</span>
      </Button>
    </Menu >
  );
}
