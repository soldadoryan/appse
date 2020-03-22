import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import CHeader from '../../components/CHeader';
import CTable from '../../components/CTable';

import FormSolucoes from '../../components/Solucoes/Form';

import { Page } from './styles';
import { Container, TitlePage, Painel } from '../../styles/scglobal';

export default function Solucoes() {
  const [solucoes, setSolucoes] = useState([]);
  const [solucao, setSolucao] = useState({});

  useEffect(() => {
    getSolucoes();
  }, []);

  const getSolucoes = async () => {
    const response = (await api.get('/solucoes')).data;

    setSolucoes(response);
  };

  return (
    <Page>
      <CHeader />
      <Container className="containersolucao">

        <TitlePage>Lista de Soluções</TitlePage>

        <Painel className="painelsolucao">
          <CTable
            titles={['#', 'Label', 'Resultado']}
            values={solucoes}
            indexes={['id', 'label', 'resultado.label']}
            indexesSearch={['label', 'resultado.label']}
            load={getSolucoes}
            FormCustom={FormSolucoes}
            setItem={setSolucao}
            actionDelete='/solucoes'
          />
        </Painel>

      </Container>
    </Page>
  );
}
