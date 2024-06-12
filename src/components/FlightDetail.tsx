import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFlightDetails, Flight } from '../api/flights';
import { useNavigate } from 'react-router-dom';
import flightIcon from '../assets/flight.png';
import DateTimeConvert from '../utils/datetimeconvertor';
import './css/flightdetail.css'
import getStatusClass from '../utils/getStatusClass';

const FlightDetail: React.FC = () => {
    const { id } = useParams<{ id: string | undefined }>();
    const [flightDetail, setFlightDetail] = useState<Flight | null>(null);
    const [selectedFlight, setSelectedFlight] = useState<boolean | null>(true);
    const navigate = useNavigate();

    const handleCloseModal = () => {
        setSelectedFlight(null);
        navigate(-1);
    };
    useEffect(() => {
        const fetchDetail = async () => {
            try {
                const data = await fetchFlightDetails(id ? id : "");
                setFlightDetail(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchDetail();

        return () => {};
    }, [id]);

    return (
        <div className={`modal ${selectedFlight ? 'show-modal' : ''}`}>
            <div className="modal-content">
                <span className="close" onClick={handleCloseModal}>&times;</span>
                {flightDetail ? (
                    <div>
                        <h2 className='flight-header'>{flightDetail.flightNumber}</h2>
                        <div className='flight-column'>
                            <img className='image-row' src={flightIcon}></img>
                            <div className='detail-row' >
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Airline:</td>
                                            <td>{flightDetail.airline}</td>
                                        </tr>
                                        <tr>
                                            <td>Origin:</td>
                                            <td>{flightDetail.origin}</td>
                                        </tr>
                                        <tr>
                                            <td>Destination:</td>
                                            <td>{flightDetail.destination}</td>
                                        </tr>
                                        <tr>
                                            <td>Departure Time:</td>
                                            <td>{DateTimeConvert(flightDetail.departureTime)}</td>
                                        </tr>
                                        <tr>
                                            <td>Status:</td>
                                            <td className={getStatusClass(flightDetail.status)}>{flightDetail.status}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default FlightDetail;
