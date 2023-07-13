import { useState, useEffect } from 'react';
import axios from 'axios';
import Board from '../../Board';
import { Container } from './styles';

export default function Home() {
  const [patientsList, setPatientsList] = useState([]);

  const fetchPatients = async () => {
    try {
      const response = await axios.get('http://localhost:4000/patients');

      setPatientsList(response);
    } catch (error) {
      console.log('Caiu no CATCH', error);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  console.log('LISTA DE PACIENTES', patientsList);

  return (
    <Container>
      <Board />
    </Container>
  );
}
