// File:List0134.ts
// Ref: Apress Pro TypeScript
// Listing 1-24. Interfaces

interface Point {
    // Properties
    x: number;
    y: number;
}

interface Passenger {
    // Properties
    name: string
}

interface Vehicle {
    // Constructor
    new(): Vehicle;

    // Properties
    currentLocation: Point;

    // Methods
    travelTo(point: Point);
    addPssenger(passenger: Passenger);
    removePassenger(passenger: Passenger);
}