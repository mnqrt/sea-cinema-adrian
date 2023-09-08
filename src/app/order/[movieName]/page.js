"use client"
import React from 'react';

const CinemaSeat = ({ seatNumber, isSelected, onClick }) => {
  // Apply styles based on isSelected
  const seatClasses = `w-10 h-10 border border-gray-300 rounded-lg cursor-pointer ${isSelected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'}`;

  return (
    <div className={seatClasses} onClick={() => onClick(seatNumber)}>
      {seatNumber}
    </div>
  );
};

const CinemaSeatingPlan = ({ selectedSeats, onSelectSeat }) => {
  const rows = 5; // Number of rows
  const seatsPerRow = 10; // Seats per row

  // Function to render all the seats
  const renderSeats = () => {
    const seatLayout = [];

    for (let row = 1; row <= rows; row++) {
      for (let seat = 1; seat <= seatsPerRow; seat++) {
        const seatNumber = `${row}-${seat}`;
        const isSelected = selectedSeats.includes(seatNumber);

        seatLayout.push(
          <CinemaSeat
            key={seatNumber}
            seatNumber={seatNumber}
            isSelected={isSelected}
            onClick={onSelectSeat}
          />
        );
      }
    }

    return seatLayout;
  };

  return (
    <div className="flex flex-wrap">
      {renderSeats()}
    </div>
  );
};

export default function CinemaBooking({ params }) {
  const movieTitle = params.movieName;
  const [selectedSeats, setSelectedSeats] = React.useState([]);
  console.log(movieTitle)

  const handleSeatSelect = (seatNumber) => {
    // Toggle seat selection
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter(seat => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Select your seats</h1>
      <h1 className="text-2xl font-bold mb-4">Current Movie: {movieTitle}</h1>
      <CinemaSeatingPlan
        selectedSeats={selectedSeats}
        onSelectSeat={handleSeatSelect}
      />
      <div className="mt-4">
        <p>Selected Seats: {selectedSeats.join(', ')}</p>
      </div>
    </div>
  );
}