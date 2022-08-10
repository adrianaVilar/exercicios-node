import React, { useState, useEffect } from 'react';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import axios from '../../services/axios';
import history from '../../services/history';
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import Loading from '../../components/Loading';

export default function Event({ match }) {
  const id = get(match, 'params.id', 0);
  const [EVENT_NAME, setEventName] = useState('');
  const [category, setCategory] = useState('');
  const [date_time, setDateTime] = useState('');
  const [organizer, setOrganizer] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!id) return;

    async function getData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/events/${id}`);
        const Img = get(data, 'Images[0].url', '');
        setEventName(data.EVENT_NAME);
        setCategory(data.category);
        setDateTime(data.date_time);
        setOrganizer(data.organizer);

        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        const status = get(err, 'response.status', 0);
        const errors = get(err, 'response.data.errors', []);

        if (status === 400) errors.map((error) => toast.error(error));
        history.push('/');
      }
    }
    getData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = false;
    let date = new Date(date_time);

    if (EVENT_NAME.length < 3 || EVENT_NAME.length > 50) {
      toast.error('O nome do evento precisa ter entre 3 e 50 caracteres');
      formErrors = true;
    }
    if (category.length < 3 || category.length > 255) {
      toast.error('A categoria do evento deve ter entre 3 e 255 caracteres');
      formErrors = true;
    }
    if (organizer.length < 3 || organizer.length > 255) {
      toast.error(
        'O nome do organizador do evento deve ter entre 3 e 255 caracteres',
      );
      formErrors = true;
    }
    if (date.getTime() < new Date().getTime()) {
      toast.error('Insira uma data futura');
      formErrors = true;
    }

    if (formErrors) return;

    try {
      setIsLoading(true);
      if (id) {
        //Editando
        await axios.put(`/events/${id}`, {
          EVENT_NAME,
          category,
          date_time,
          organizer,
        });
        toast.success('Evento editado com sucesso');
        console.log(id);
      } else {
        //Criando
        await axios.post(`/events/`, {
          EVENT_NAME,
          category,
          date_time,
          organizer,
        });
        toast.success('Evento editado com sucesso');
      }
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1> {id ? 'Editar evento' : 'Criar evento'}</h1>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={EVENT_NAME}
          onChange={(e) => setEventName(e.target.value)}
          placeholder="Nome do evento"
        />
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Categoria do evento"
        />
        <input
          type="datetime-local"
          value={date_time}
          onChange={(e) => setDateTime(e.target.value)}
          placeholder="Data e hora do evento"
        />
        <input
          type="text"
          value={organizer}
          onChange={(e) => setOrganizer(e.target.value)}
          placeholder="Nome do organizador evento"
        />

        <button type="submit"> Enviar</button>
      </Form>
    </Container>
  );
}

Event.propTypes = {
  match: PropTypes.shape({}).isRequired,
  history: ProoTypes.shape([]).isRequired,
};
