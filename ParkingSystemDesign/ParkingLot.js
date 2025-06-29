class ParkingLot {
    constructor(parkingLotId, parkingLotName, parkingLotAddress, totalFloors, entryPanel, exitPanel) {
        this.parkingLotId = parkingLotId;
        this.parkingLotName = parkingLotName;
        this.parkingLotAddress = parkingLotAddress;
        this.totalFloors = totalFloors;
        this.entryPanel = entryPanel;
        this.exitPanel = exitPanel; 
        this.parkingFloors = [];
    }

    isFull() {
        return this.parkingFloors.every(floor => floor.isFull());
    }

    addParkingFloor(floor) {
        this.parkingFloors.push(floor);
    }

    getParkingFloors() {
        return this.parkingFloors;
    }

    parkVehicle(vehicle){
        
    }

    exitVehicle(vehicle) {
        
    }
}

module.exports = ParkingLot;
