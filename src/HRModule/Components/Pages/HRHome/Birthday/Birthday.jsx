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
      const birthdayImageUrl = "https://example.com/birthday-image.jpg";
      const anniversaryImageUrl = "https://example.com/anniversary-image.jpg";
 
      const imageUrl =
        type === "birthday" ? 'https://marketplace.canva.com/EAFonk4pWlU/1/0/1600w/canva-pink-watercolor-floral-happy-birthday-greeting-card--CqQ5DJghe4.jpg' : 'https://t3.ftcdn.net/jpg/07/10/06/28/360_F_710062816_RdLiSVZLipf9zQa3lxKmwjJkVWvTptVY.jpg';
 
      const message =
        type === "birthday"
          ? `Dear ${name},<br><br>Wishing you a fantastic day filled with joy, laughter, and special moments. May the year ahead bring you success, good health, and all the happiness you deserve! 🎉<br><br><img src="${imageUrl}" alt="Birthday Image" style="width:100%; max-width:600px;"><br><br>Best wishes,<br>Your Team`
          : `Dear ${name},<br><br>Wishing you a fantastic milestone at NMIT Solutions Pvt Ltd. Your dedication and hard work have been invaluable to the team, and we're grateful for your contributions. Here's to many more successful years ahead, filled with growth, achievements, and happiness. Congratulations on this special occasion! 🥳🎈🎊<br><br><img src="${imageUrl}" alt="Anniversary Image" style="width:100%; max-width:600px;"><br><br>Best wishes,<br>Your Team`;
 
      const subject =
        type === "birthday"
          ? "Happy Birthday! 🎂"
          : "Happy Work Anniversary! 🎉";
 
      await axios.post("http://localhost:8000/api/v1/hr/birthday", {
        to: email,
        subject: subject,
        message: message,
      });
 
      alert(`Wish email sent to ${name}`);
    } catch (error) {
      alert("Failed to send wish email");
    }
  };
 
 
 
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
 
  return (
    <div className="main5">
 
     <div className="card-container"> 
  <div className="cracker cracker1"></div>
  <div className="cracker cracker2"></div>
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
 
    </div>
  );
};
 
export default Birthday;