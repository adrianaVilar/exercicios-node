import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import { FaImages, FaEdit, FaWindowClose } from 'react-icons/fa';

import { Container } from '../../styles/GlobalStyles';
import { EventContainer, EventImage } from './styled';
import axios from '../../services/axios';

import Loading from '../../components/Loading';

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

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Eventos</h1>

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
            <Link to={`/event/${event.id}/delete`}>
              <FaWindowClose size={16} />
            </Link>
          </div>
        ))}
      </EventContainer>
    </Container>
  );
}