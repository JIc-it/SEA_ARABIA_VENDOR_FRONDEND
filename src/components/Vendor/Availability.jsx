import React, { useState } from 'react';
import Select from 'react-select';
import { Card, CardContent, Checkbox, FormControlLabel, Typography } from '@material-ui/core';

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


  return (
    <div className="page" style={{ height: "100vh", top: 20 }}>
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
                <h2>What your customers will see</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Availability