import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Birthday.css";

const Birthday = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const today = new Date();
        const response = await axios.get(
          "http://localhost:8000/api/v1/hr/events/month",
          {
            params: {
              day: today.getDate(),
              month: today.getMonth() + 1,
            },
          }
        );

        const { birthdays = [], events = [] } = response.data.result || {};
        const formattedEvents = [
          ...birthdays.map((birthday) => ({
            id: birthday.emp_id,
            name: birthday.firstName,
            email: birthday.email,
            description: "Birthday....🎂",
            type: "birthday",
          })),
          ...events.map((event) => ({
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
      await axios.post("http://localhost:8000/api/v1/hr/birthday", {
        to: email,
        subject:
          type === "birthday"
            ? "Happy Birthday! 🎂"
            : "Happy Work Anniversary! 🎉",
        message: `Dear ${name}, wishing you a wonderful ${
          type === "birthday" ? "birthday" : "work anniversary"
        }!`,
      });
      alert(`Wish email sent to ${name}`);
    } catch (error) {
      alert("Failed to send wish email");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <div className="card">
        {events.length > 0 ? (
          events.map((event) => (
            <div key={event.id} className="event-detail">
              <div>
                <h5>{event.name}</h5>
                <p>{event.description}</p>
              </div>
              <div className="wish-button-container">
                <button
                  className="wish-button"
                  onClick={() =>
                    handleWish(event.email, event.name, event.type)
                  }
                >
                  Wish
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No events today</p>
        )}
      </div>
    </div>
  );
};

export default Birthday;
