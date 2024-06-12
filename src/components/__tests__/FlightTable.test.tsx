
import renderer from 'react-test-renderer';
import { test, expect } from 'vitest';
import FlightTable from '../FlightTable';
import { render, screen } from '@testing-library/react';

test('mount component', async () => {
    expect(FlightTable).toBeTruthy();
});

test('screenshot testing', () => {
    const tree = renderer
        .create(
            <FlightTable></FlightTable>,
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
test("should render flight Table", () => {
    render(<FlightTable></FlightTable>);
    const FlightElement = screen.getByTestId('flight-table');
    expect(FlightElement).toBeDefined();
});


