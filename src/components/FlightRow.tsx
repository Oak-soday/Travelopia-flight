// components/FlightRow.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Flight } from '../api/flights';
import DateTimeConvert from '../utils/datetimeconvertor';
import getStatusClass from '../utils/getStatusClass';

interface FlightRowProps {
    flight: Flight;
}

const FlightRow: React.FC<FlightRowProps> = ({ flight }) => {
    return (
        <tr>
            <td><Link to={`/flight/${flight.id}`}>{flight.flightNumber}</Link></td>
            <td>{flight.airline}</td>
            <td>{flight.origin}</td>
            <td>{flight.destination}</td>
            <td>{DateTimeConvert(flight.departureTime)}</td>
            <td className={getStatusClass(flight.status)}>{flight.status}</td>
        </tr >
    );
};

export default FlightRow;
