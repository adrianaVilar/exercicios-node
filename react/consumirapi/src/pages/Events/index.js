import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import { FaImages, FaEdit, FaWindowClose, FaExclamation } from 'react-icons/fa';

import { Container } from '../../styles/GlobalStyles';
import { EventContainer, EventImage } from './styled';
import { NewEvent } from './styled';
import axios from '../../services/axios';

import Loading from '../../components/Loading';
import { toast } from 'react-toastify';

export default function Events() {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const response = await axios.get('/events');
      setEvents(response.data);
      setIsLoading(false);
    }

    getData();
  }, []);

  const handleDeleteAsk = (e) => {
    e.preventDefault();
    const exclamation = e.currentTarget.nextSibling;
    exclamation.setAttribute('display', 'block');
    e.target.remove();
  };
  const handleDelete = async (e, id) => {
    try {
      setIsLoading(true);
      await axios.delete(`/events/${id}`);
      toast.success('Evento deletado com sucesso');
      setIsLoading(false);
      //tentar removero pai do elemento
      e.target.parentElement.remove();
    } catch (err) {
      const status = get(err, 'response.status', 0);

      if (status === 401) {
        toast.error('Por favor, faça login para conseguir deletar o evento');
      } else {
        toast.error('Ocorreu um erro ao excluir o evento');
      }

      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Eventos</h1>

      <NewEvent to="/event/"> Criar novo evento</NewEvent>

      <EventContainer>
        {events.map((event) => (
          <div key={String(event.id)}>
            <EventImage>
              {get(event, 'Images[0].url', false) ? (
                <img src={event.Images[0].url} alt="" />
              ) : (
                <FaImages size={36} />
              )}
            </EventImage>
            <span>{event.event_name}</span>
            <span>{event.organizer}</span>
            <Link to={`/event/${event.id}/edit`}>
              <FaEdit size={16} />
            </Link>
            <Link onClick={handleDeleteAsk} to={`/event/${event.id}/delete`}>
              <FaWindowClose size={16} />
            </Link>
            <FaExclamation
              size={16}
              display="none"
              cursor="pointer"
              onClick={(e) => handleDelete(e, event.id)}
            />
          </div>
        ))}
      </EventContainer>
    </Container>
  );
}
