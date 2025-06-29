class ParkingFloor {
    constructor(floorNumber, floorName) {
        this.floorNumber = floorNumber;
        this.floorName = floorName;
        this.parkingSpots = [];
    }

    addParkingSpot(spot) {
        this.parkingSpots.push(spot);
    }

    getAvailableSpot() {
        return this.parkingSpots.find(spot => spot.isAvailable);
    }

    isFull() {
        return this.parkingSpots.every(spot => !spot.isAvailable);
    }

    getFloorNumber() {
        return this.floorNumber;
    }

    getFloorName() {
        return this.floorName;
    }

    isClosed() {
        return this.parkingSpots.length === 0;
    }
}

module.exports = ParkingFloor;
