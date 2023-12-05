import React, { useState } from 'react';
import Select from 'react-select';
import { Card, CardContent, Checkbox, FormControlLabel, Typography } from '@material-ui/core';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useSpring, animated } from 'react-spring';

const cards = [
  { id: 1, title: 'Card 1' },
  { id: 2, title: 'Card 2' },
  { id: 3, title: 'Card 3' },
  { id: 4, title: 'Card 4' },
  { id: 5, title: 'Card 5' },
  { id: 6, title: 'Card 6' },
];
const options = [
  {
    value: 'option1',
    label: 'Albadee',
    sublabel: 'Yacht',
    extraSublabel: '2 Slots Available',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHIbYLk8_AsevQ8CtmLeBBxAoVmBqYIveELw&usqp=CAU',
  },
  {
    value: 'option2',
    label: 'Durrat AlMarina',
    sublabel: 'Yacht',
    extraSublabel: '2 Slots Available',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHIbYLk8_AsevQ8CtmLeBBxAoVmBqYIveELw&usqp=CAU',
  },
  {
    value: 'option3',
    label: 'AlMayaseen',
    sublabel: 'Yacht',
    extraSublabel: '2 Slots Available',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHIbYLk8_AsevQ8CtmLeBBxAoVmBqYIveELw&usqp=CAU',
  },
  {
    value: 'option4',
    label: 'Albadee',
    sublabel: 'Yacht',
    extraSublabel: '2 Slots Available',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHIbYLk8_AsevQ8CtmLeBBxAoVmBqYIveELw&usqp=CAU',
  },
];

const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

const generateCalendar = (year, month) => {
  const totalDays = daysInMonth(year, month);
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const days = [];

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null);
  }

  // Add days of the month
  for (let i = 1; i <= totalDays; i++) {
    days.push(i);
  }

  return days;
};


const Calendar = ({ year, month, onPrevMonth, onNextMonth }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const days = generateCalendar(year, month);

  return (
    <div className="calendar">
      <div className="header">
        <div className="nav" onClick={onPrevMonth}>
          <i className="arrow left"></i>
        </div>
        <h2>{new Date(year, month).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</h2>
        <div className="nav" onClick={onNextMonth}>
          <i className="arrow right"></i>
        </div>
      </div>
      <div className="days">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="day">{day}</div>
        ))}
      </div>
      <div className="grid">
        {days.map((day, index) => (
          <div
            key={index}
            className={`day ${day !== null ? 'active' : ''} ${day === selectedDate ? 'selected' : ''}`}
            onClick={() => setSelectedDate(day)}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};
const Availability = ({ selectedOptions, onChange }) => {

  const timeSlots = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    // ... add more time slots as needed
  ];

  const [selectedSlots, setSelectedSlots] = useState([]);

  const handleSlotClick = (slot) => {
    if (selectedSlots.includes(slot)) {
      // If the slot is already selected, remove it
      setSelectedSlots(selectedSlots.filter((selected) => selected !== slot));
    } else {
      // If the slot is not selected, add it
      setSelectedSlots([...selectedSlots, slot]);
    }
  };

  const currentDate = new Date();
  const [year, setYear] = useState(currentDate.getFullYear());
  const [month, setMonth] = useState(currentDate.getMonth());

  const handlePrevMonth = () => {
    setMonth(month === 0 ? 11 : month - 1);
    setYear(month === 0 ? year - 1 : year);
  };

  const handleNextMonth = () => {
    setMonth(month === 11 ? 0 : month + 1);
    setYear(month === 11 ? year + 1 : year);
  };

  // Slider Start

  const [index, setIndex] = useState(0);
  const [selectedCards, setSelectedCards] = useState([]);

  const props = useSpring({
    transform: `translateX(${-index * (100 / 7)}%)`, // Divide 100 by the number of columns (7 in this case)
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
  });

  const toggleCardSelection = (cardId) => {
    setSelectedCards((prevSelectedCards) =>
      prevSelectedCards.includes(cardId)
        ? prevSelectedCards.filter((id) => id !== cardId)
        : [...prevSelectedCards, cardId]
    );
  };

  const nextCard = () => {
    setIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevCard = () => {
    setIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <div className="page" style={{ height: "100vh", top: 20 }}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <div class="card">
              <div class="card-body">
                <div className='row'>
                  <h2>Mark Availability</h2>
                  <h3>Service Type</h3>
                  <div className='col-lg-4'>
                    <label class="card">
                      <input name="plan" class="radio" type="radio" checked />
                      <span class="plan-details">
                        <span class="plan-type">Boat</span>
                      </span>
                    </label>
                  </div>
                  <div className='col-lg-4'>
                    <label class="card">
                      <input name="plan" class="radio" type="radio" checked />
                      <span class="plan-details">
                        <span class="plan-type">Yacht</span>
                      </span>
                    </label>
                  </div>
                  <div className='col-lg-4'>
                    <label class="card">
                      <input name="plan" class="radio" type="radio" checked />
                      <span class="plan-details">
                        <span class="plan-type">Jet Ski</span>
                      </span>
                    </label>
                  </div>
                  <h2>Select Machine</h2>
                  <Select
                    isMulti
                    options={options}
                    value={selectedOptions}
                    onChange={onChange}
                    getOptionLabel={(option) => (
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={option.image} alt={option.label} style={{ width: '40px', marginRight: '8px' }} />
                        <div>
                          <div>
                            <strong>{option.label}</strong>
                          </div>
                          <div style={{ fontSize: '12px', color: 'gray' }}>
                            {option.sublabel} - {option.extraSublabel}
                          </div>
                        </div>
                      </div>
                    )}
                    getOptionValue={(option) => option.value}
                  />
                  {/* <div className="App">
                  <Calendar year={year} month={month} onPrevMonth={handlePrevMonth} onNextMonth={handleNextMonth} />
                </div> */}
                  <div style={{ maxWidth: 1500 }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DateCalendar />
                    </LocalizationProvider>
                  </div>
                  <br></br>
                  <h4>Time Slot</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {timeSlots.map((slot, index) => (
                      <div
                        key={index}
                        style={{
                          width: '120px',
                          margin: '8px',
                          cursor: 'pointer',
                          backgroundColor: selectedSlots.includes(slot) ? '#0A77FF' : 'white',
                          borderRadius: '4px',
                          border: '1px solid #ccc',
                          padding: '8px',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                        }}
                        onClick={() => handleSlotClick(slot)}
                      >
                        <Typography variant="body2">
                          {slot}
                        </Typography>
                      </div>
                    ))}
                  </div>
                  <button type="button" class="btn btn-info btn-md btn-block" style={{ color: '#fff' }}>Mark As Available</button>
                  {selectedSlots.length > 0 && (
                    <div>
                      <p>You have selected the following time slots:</p>
                      <ul>
                        {selectedSlots.map((selected, index) => (
                          <li key={index}>{selected}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
            <div class="card">
              <div class="card-body">
                <div className='row'>
                  <button type="button" class="btn btn-secondary btn-md btn-block" style={{ color: '#fff' }}>What your customers will see</button>
                  <h4>Date</h4>
                  <div className="card-slider">
                    <animated.div className="cards" style={props}>
                      {cards.map((card) => (
                        <div
                          key={card.id}
                          className={`card-new ${selectedCards.includes(card.id) ? 'selected' : ''}`}
                          onClick={() => toggleCardSelection(card.id)}
                        >
                          <h2>{card.title}</h2>
                          <p>{card.content}</p>
                        </div>
                      ))}
                    </animated.div>
                    <button onClick={prevCard}>Prev</button>
                    <button onClick={nextCard}>Next</button>
                  </div>
                  <br></br>
                  <br></br>
                  <h4>Time Slot</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {timeSlots.map((slot, index) => (
                      <div
                        key={index}
                        style={{
                          width: '120px',
                          margin: '8px',
                          cursor: 'pointer',
                          backgroundColor: selectedSlots.includes(slot) ? '#0A77FF' : 'white',
                          borderRadius: '4px',
                          border: '1px solid #ccc',
                          padding: '8px',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                        }}
                        onClick={() => handleSlotClick(slot)}
                      >
                        <Typography variant="body2">
                          {slot}
                        </Typography>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Availability