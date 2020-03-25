import React, { useState, useEffect } from 'react';

import api from '../../services/api';

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
  const [questoes, setQuestoes] = useState([]);

  const getQuestoes = async () => {
    const response = (await api.get('/questoes')).data;

    setQuestoes(response);
  };

  useEffect(() => {
    getQuestoes();
  }, []);

  return (
    <>
      {(run) && <Sistema questoes={questoes} close={() => setRun(false)} />}
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
        <Button to='/solucoes'>
          <IoMdThumbsUp />
          <span>Soluções</span>
        </Button>
        <Button to='/regras'>
          <IoIosHammer />
          <span>Regras</span>
        </Button>
        <Button onClick={() => setRun(true)}>
          <IoIosPlay />
          <span>Iniciar sistema</span>
        </Button>
      </Menu >
    </>
  );
}
