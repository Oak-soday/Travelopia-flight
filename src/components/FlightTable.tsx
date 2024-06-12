import React, { useState, useEffect } from 'react';
import FlightRow from './FlightRow';
import { fetchFlights, Flight } from '../api/flights';
import './css/flighttable.css';
import { Outlet } from 'react-router-dom';

const FlightTable: React.FC = () => {
    const [flights, setFlights] = useState<Flight[]>([]);
    useEffect(() => {
        const fetchFlightData = async () => {
            try {
                const data = await fetchFlights();
                setFlights(data);
            } catch (error) {

            }
        };
        fetchFlightData();
        const interval = setInterval(fetchFlightData, 1500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <table className="flight-table">
                <thead>
                    <tr>
                        <th>Flight Number</th>
                        <th>Airline</th>
                        <th>Origin</th>
                        <th>Destination</th>
                        <th>Departure Time</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {flights.map((flight) => (
                        <FlightRow key={flight.id} flight={flight} />
                    ))}
                </tbody>
            </table>
            <Outlet></Outlet>
        </div>
    );
};

export default FlightTable;
