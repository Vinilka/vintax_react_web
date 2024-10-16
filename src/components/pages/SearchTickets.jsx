import React, { useState } from 'react';
import './SearchTickets.css';

export default function SearchTickets() {
  const [tripType, setTripType] = useState('one-way');
  const [fromLocation, setFromLocation] = useState('Нарочь');
  const [toLocation, setToLocation] = useState('Минск');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [passengers, setPassengers] = useState(1);

  return (
    <div className="p-6 bg-white border border-gray-200 rounded-md shadow-md w-full sm:max-w-4xl lg:px-8 lg:max-w-none mx-auto mt-6">
      {/* Trip Type Selection */}
      <div className="flex items-center mb-4 space-x-4">
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            className="form-radio text-[#6b46c1]" // Use the purple color
            checked={tripType === 'one-way'}
            onChange={() => setTripType('one-way')}
          />
          <span className="ml-2 text-gray-700">В одну сторону</span>
        </label>
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            className="form-radio text-gray-600"
            checked={tripType === 'round-trip'}
            onChange={() => setTripType('round-trip')}
          />
          <span className="ml-2 text-gray-700">Туда и обратно</span>
        </label>
      </div>

      {/* Main Search Fields */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4">
        {/* From Field */}
        <div className="flex-grow mb-4 lg:mb-0">
          <label className="block text-gray-700">Откуда</label>
          <div className="relative">
            <input
              type="text"
              value={fromLocation}
              onChange={(e) => setFromLocation(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#6b46c1]" 
            />
            <div className="absolute left-2 top-2 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v18m9-9H3"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Swap Button */}
        <button
          type="button"
          onClick={() => {
            const temp = fromLocation;
            setFromLocation(toLocation);
            setToLocation(temp);
          }}
          className="px-2 py-2 mb-4 lg:mb-0 bg-gray-200 rounded-full focus:outline-none hover:bg-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 8h16M4 16h16"
            />
          </svg>
        </button>

        {/* To Field */}
        <div className="flex-grow mb-4 lg:mb-0">
          <label className="block text-gray-700">Куда</label>
          <div className="relative">
            <input
              type="text"
              value={toLocation}
              onChange={(e) => setToLocation(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#6b46c1]" // Focus with purple border
            />
            <div className="absolute left-2 top-2 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v18m9-9H3"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Date Field */}
        <div className="flex-grow mb-4 lg:mb-0">
          <label className="block text-gray-700">Дата отъезда</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#6b46c1]" 
          />
        </div>

        {/* Passengers Field */}
        <div className="flex-grow mb-4 lg:mb-0">
          <label className="block text-gray-700">Пассажиры</label>
          <select
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
            className="w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#6b46c1]" // Focus with purple border
          >
            <option value="1">1 </option>
            <option value="2">2 </option>
            <option value="3">3 </option>
            <option value="4">4 </option>
          </select>
        </div>

        {/* Search Button */}
        <div className="w-full lg:w-auto">
          <button className="w-full lg:w-auto bg-[#6b46c1] text-white py-2 px-6 rounded-md hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 transition">
            Найти
          </button>
        </div>
      </div>
    </div>
  );
}
