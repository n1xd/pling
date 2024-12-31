import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import EventImage1 from '../assets/events/ai.webp';
import EventImage2 from '../assets/events/behind-the-curtain.webp';
import EventImage3 from '../assets/events/culture-fair.webp';
import tea from '../assets/events/reading-and-tea.webp';
import lightning from '../assets/events/lightning-talks.webp';
import hottakes from '../assets/events/hot-takes-pic.webp';
import opening from '../assets/events/firework.webp';
import mic from '../assets/events/mic.webp';
import './Events.css';

const Events = () => {
  const upcomingEvents = [
    {
      image: EventImage1,
      text: 'LLM Workshop',
      date: 'details coming soon',
      signup: require('../assets/events/thenewmind.png'),
    },
    {
      image: tea,
      text: 'Reading & Tea',
      date: 'details coming soon',
    },
    {
      image: EventImage2,
      text: 'Night Behind the Curtain',
      date: 'details coming soon',
    },
    {
      image: EventImage3,
      text: 'Language Fair',
      date: 'details coming soon',
    },
  ];

  const pastEvents = [
    {
      image: mic,
      text: 'Lightning Talks',
      date: 'Oct 17 2024',
      signup: 'https://lu.ma/gme3luwp',
    },
    {
      image: opening,
      text: 'Opening Event of 2024/25',
      date: 'Sep 18 2024',
      signup: 'https://lu.ma/4tfzlph7',
    },
    {
      image: lightning,
      text: 'Lightning Talks',
      date: 'Oct 18 2022',
      signup: require('../assets/events/lightning-talks-poster.png'),
    },
    {
      image: hottakes,
      text: 'Hot Takes',
      date: 'Nov 17 2022',
      signup: require('../assets/events/hot-takes-poster.png'),
    },
  ];

  return (
    <div className="events-container">
      <h2>Upcoming Events</h2>
      <p>Stay tuned for more info about our events in 2024/25!</p>
      <div className="events-row">
        {upcomingEvents.map((event, index) => (
          <a href={event.signup} key={index} target="_blank" rel="noopener noreferrer" className="event-card">
            <img loading="lazy" src={event.image} alt={event.text} />
            <div className="event-info">
              <div className="event-date">{event.date}</div>
              <div className="event-text">{event.text}</div>
            </div>
          </a>
        ))}
      </div>

      <h2>Past Events</h2>
      <div className="events-row">
        {pastEvents.map((event, index) => (
          <a href={event.signup} key={index} target="_blank" rel="noopener noreferrer" className="event-card">
            <div className="event-ellipsis"></div>
            <LazyLoadImage src={event.image} alt={event.text} />
            <div className="event-info">
              <div className="event-date">{event.date}</div>
              <div className="event-text">{event.text}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Events;





