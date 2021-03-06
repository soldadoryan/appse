import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import CHeader from '../../components/CHeader';
import CTable from '../../components/CTable';

import FormQuestoes from '../../components/Questoes/Form';

import { Page } from './styles';
import { Container, TitlePage, Painel } from '../../styles/scglobal';

export default function Questoes() {
  const [questoes, setQuestoes] = useState([]);

  useEffect(() => {
    getQuestoes();
  }, []);

  const getQuestoes = async () => {
    const response = (await api.get('/questoes')).data;

    console.log(response);

    setQuestoes(response);
  };

  return (
    <Page>
      <CHeader />
      <Container className="containerquestao">

        <TitlePage>Lista de Questões</TitlePage>

        <Painel className="painelquestao">
          <CTable
            titles={['#', 'Label', 'Explicação', 'Variável']}
            values={questoes}
            indexes={['id', 'label', 'explicacao', 'variavel.label']}
            indexesSearch={['label', 'variavel.label']}
            load={getQuestoes}
            FormCustom={FormQuestoes}
            actionDelete='/questoes'
          />
        </Painel>

      </Container>
    </Page>
  );
}
