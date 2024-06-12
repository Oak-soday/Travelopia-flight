import React, { useState, useEffect } from 'react';
import FlightRow from './FlightRow';
import { fetchFlights, Flight } from '../api/flights';
import './css/flighttable.css';
import { Outlet } from 'react-router-dom';
import loadingIcon from '../assets/flight.png';

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
        <div data-testid="flight-table" className='flight-container'>
            {flights.length != 0 ?
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
                            <FlightRow data-testid="flight-list" key={flight.id} flight={flight} />
                        ))}
                    </tbody>
                </table>
                : <img className="loading-icon" src={loadingIcon}></img>}
            <Outlet></Outlet>
        </div>
    );
};

export default FlightTable;
