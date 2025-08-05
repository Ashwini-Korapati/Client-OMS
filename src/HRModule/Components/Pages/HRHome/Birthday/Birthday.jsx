import React, { useEffect, useState } from "react";
import api from '../../../../../Httphandler';
import "./Birthday.css";

const Birthday = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const today = new Date();
        const response = await api.get("/api/v1/hr/events/month", {
          params: {
            day: today.getDate(),
            month: today.getMonth() + 1,
          },
        });
        const { birthdays = [], events: anniversaryEvents = [] } = response.data.result || {};
        const formattedEvents = [
          ...birthdays.map((birthday) => ({
            id: birthday.emp_id,
            name: birthday.firstName,
            email: birthday.email,
            description: "Birthday....🎂",
            type: "birthday",
          })),
          ...anniversaryEvents.map((event) => ({
            id: event.emp_id,
            name: event.firstName,
            email: event.email,
            description: `Completed ${event.yearsOfExperience} of service....🎉`,
            type: "anniversary",
          })),
        ];
        setEvents(formattedEvents);
      } catch {
        setError("Failed to fetch events");
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const handleWish = async (email, name, type) => {
    try {
      const birthdayImageUrl = "https://marketplace.canva.com/EAFonk4pWlU/1/0/1600w/canva-pink-watercolor-floral-happy-birthday-greeting-card--CqQ5DJghe4.jpg";
      const anniversaryImageUrl = "https://t3.ftcdn.net/jpg/07/10/06/28/360_F_710062816_RdLiSVZLipf9zQa3lxKmwjJkVWvTptVY.jpg";
      const imageUrl = type === "birthday" ? birthdayImageUrl : anniversaryImageUrl;
      const message = type === "birthday"
        ? `Dear ${name},<br><br>Wishing you a fantastic day filled with joy, laughter, and special moments. May the year ahead bring you success, good health, and all the happiness you deserve! 🎉<br><br><img src="${imageUrl}" alt="Birthday Image" style="width:100%; max-width:600px;"><br><br>Best wishes,<br>Your Team`
        : `Dear ${name},<br><br>Wishing you a fantastic milestone at NMIT Solutions Pvt Ltd. Your dedication and hard work have been invaluable to the team, and we're grateful for your contributions. Here's to many more successful years ahead, filled with growth, achievements, and happiness. Congratulations on this special occasion! 🥳🎈🎊<br><br><img src="${imageUrl}" alt="Anniversary Image" style="width:100%; max-width:600px;"><br><br>Best wishes,<br>Your Team`;
      const subject = type === "birthday" ? "Happy Birthday! 🎂" : "Happy Work Anniversary! 🎉";
      await api.post("/birthday", { to: email, subject, message });
      alert(`Wish email sent to ${name}`);
    } catch (error) {
      alert("Failed to send wish email");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="birthday-widget-content">
      <h3>Today's Events</h3>
      {events.length > 0 ? (
        <div className="event-list">
          {events.map((event) => (
            <div key={event.id} className="event-detail">
              <div className="event-info">
                <h5>{event.name}</h5>
                <p>{event.description}</p>
              </div>
              <button
                className="wish-button"
                onClick={() => handleWish(event.email, event.name, event.type)}
              >
                Wish
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-events-message">No events today.</p>
      )}
    </div>
  );
};

export default Birthday;