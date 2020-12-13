import { Ship } from './Ship';

test('creating a new ship returns an array of (unhit) positions', () => {
    let newShip = Ship(5, [[1, 1], [2, 1], [3, 1], [4, 1], [5, 1]]);
    expect(newShip.getPositionsHit()).toEqual([0, 0, 0, 0, 0]);
})

test('creating new Ship should be unsunk', () => {
    let newShip = Ship(3, [[2, 2], [2, 3], [2, 4]]);
    expect(newShip.isSunk()).toBeFalsy();
})

test('hitting a ships position should return an array with 1', () => {
    let newShip = Ship(4, [[1, 3], [2, 3], [3, 3], [4, 3]]);
    newShip.hit([4, 3]);
    expect(newShip.getPositionsHit()).toContain(1);
})

test('hitting a ships position should return an array with 1', () => {
    let newShip = Ship(3, [[0, 0], [0, 1], [0, 2]]);
    newShip.hit([0, 2]);
    expect(newShip.getPositionsHit()).toContain(1);
})

test('hitting all ships positions should return a sunk ship', () => {
    let newShip = Ship(2, [[3, 2], [4, 2]]);
    newShip.hit([3, 2]);
    newShip.hit([4, 2]);
    expect(newShip.isSunk()).toBeTruthy();
})