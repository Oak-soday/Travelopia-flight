import {getFlightApi} from "./UrlList";

export interface Flight {
  id: string;
  flightNumber: string;
  airline: string;
  origin: string;
  destination: string;
  departureTime: string;
  status: string;
}

export async function fetchFlights(): Promise<Flight[]> {
  try {
    const response = await fetch(getFlightApi);
    if (!response.ok) {
      throw new Error("Failed to fetch flight data");
    }
    const data: Flight[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching flight data:", error);
    throw error;
  }
}

export async function fetchFlightDetails(id: string): Promise<Flight> {
  try {
    const response = await fetch(`${getFlightApi}/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch flight details");
    }
    const data: Flight = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching flight details:", error);
    throw error;
  }
}
