import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import CHeader from '../../components/CHeader';
import CTable from '../../components/CTable';

import FormResultados from '../../components/Resultados/Form';

import { Page } from './styles';
import { Container, TitlePage, Painel } from '../../styles/scglobal';

export default function Resultados() {
  const [resultados, setResultados] = useState([]); //array

  useEffect(() => {
    getResultados();
  }, []);

  const getResultados = async () => {
    const response = (await api.get('/resultados')).data;
    setResultados(response);
  };

  return (
    <Page>
      <CHeader />
      <Container className="containerresultado">

        <TitlePage>Lista de Resultados</TitlePage>

        <Painel className="painelresultado">
          <CTable
            titles={['#', 'Label', 'Mensagem']}
            values={resultados}
            indexes={['id', 'label', 'text']}
            indexesSearch={['label', 'text']}
            load={getResultados}
            FormCustom={FormResultados}
            actionDelete='/resultados'
          />
        </Painel>

      </Container>
    </Page>
  );
}
