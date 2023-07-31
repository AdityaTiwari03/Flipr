import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./planner.styles.css";

const Planner = ({ onAddEvent }) => {
  const [newEventTitle, setNewEventTitle] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleInputChange = (event) => {
    setNewEventTitle(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleAddEvent = () => {
    onAddEvent(newEventTitle, selectedDate);
    setNewEventTitle("");
  };

  return (
    <div className="planner-container">
      <div className="flex items-center">
        <div className="coolinput">
          <label htmlFor="input" className="text">
            Title
          </label>
          <input
            type="text"
            placeholder="Write here..."
            name="input"
            className="input"
            value={newEventTitle}
            onChange={handleInputChange}
          />
        </div>
        <DatePicker selected={selectedDate} onChange={handleDateChange} />
        <button onClick={handleAddEvent} type="button" className="button">
          <span className="button__text">Add Event</span>
          <span className="button__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
              stroke="currentColor"
              height="24"
              fill="none"
              className="svg"
            >
              <line y2="19" y1="5" x2="12" x1="12"></line>
              <line y2="12" y1="12" x2="19" x1="5"></line>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Planner;
