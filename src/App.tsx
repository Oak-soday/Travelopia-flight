// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FlightTable from './components/FlightTable';
import FlightDetail from './components/FlightDetail';
import ErrorBoundary from './components/ErrorBoundry';

const App: React.FC = () => {
  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<FlightTable />}>
            <Route path="/flight/:id" element={<FlightDetail />} /></Route>
        </Routes>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
