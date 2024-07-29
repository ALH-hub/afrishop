import './Event.css';

const events = [
  {
    id: 1,
    title: 'Painting Workshop',
    date: '2024-08-15',
    time: '10:00 AM - 12:00 PM',
    location: 'Art Studio, Downtown',
    description:
      'An interactive painting workshop for all levels. Materials will be provided, and experienced instructors will guide you through various painting techniques.',
  },
  {
    id: 2,
    title: 'Artisan Market',
    date: '2024-08-20',
    time: '09:00 AM - 05:00 PM',
    location: 'Central Park',
    description:
      'A market to discover and purchase local crafts. Explore a variety of handmade goods, from jewelry to pottery, and support local artisans.',
  },
  {
    id: 3,
    title: 'Sculpture Class',
    date: '2024-08-25',
    time: '02:00 PM - 04:00 PM',
    location: 'Community Center, West Wing',
    description:
      'A sculpture class for beginners and intermediates. Learn the basics of sculpting with clay and create your own masterpiece to take home.',
  },
  {
    id: 4,
    title: 'Art Exhibition',
    date: '2024-08-30',
    time: '06:00 PM - 08:00 PM',
    location: 'Art Gallery, Main Street',
    description:
      'An art exhibition featuring works by local artists. Join us for an evening of art, music, and refreshments as we celebrate the creative community.',
  },
  // Add more events as needed
];

const Event = () => {
  return (
    <div className='events-page'>
      <h1 className='text-3xl font-bold mb-6'>Upcoming Events</h1>
      <div className='events-list'>
        {events.map((event) => (
          <div key={event.id} className='event-card'>
            <h2 className='event-title text-xl font-semibold'>{event.title}</h2>
            <p className='event-date text-gray-600'>{event.date}</p>
            <p className='event-time text-gray-600'>{event.time}</p>
            <p className='event-location text-gray-600'>{event.location}</p>
            <p className='event-description mt-2'>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;
