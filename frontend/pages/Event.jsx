import React, { useEffect, useState } from 'react';
import './EventPage.css';

const Event = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('https://example.com/api/events');
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des événements :', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="event-page">
      <h1>Liste des événements</h1>
      <ul className="event-list">
        {events.map((event) => (
          <li key={event.id} className="event-item">
            <img src={event.imageUrl} alt={event.title} className="event-image" />
            <h2 className="event-title">{event.title}</h2>
            <p className="event-description">{event.description}</p>
            <p className="event-date">Date : {event.date}</p>
            <p className="event-time">Heure : {event.time}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Event;