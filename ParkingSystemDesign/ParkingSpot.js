class ParkingSpot {
    constructor(spotId, spotName, spotType) {
        this.spotId = spotId;
        this.spotName = spotName;
        this.spotType = spotType;
        this.isAvailable = true;
        this.vehicle = null;
    }

    getSpotType() {
        return this.spotType;
    }

    getSpotName() {
        return this.spotName;
    }

    isSpotAvailable() {
        return this.isAvailable;
    }

    getVehicle() {
        return this.vehicle;
    }

    parkVehicle(vehicle) {
        if(!this.isAvailable) {
            console.log('Parking spot is not available.');
            return false;
        }
        this.vehicle = vehicle;
        this.isAvailable = false;
        console.log(`Vehicle ${vehicle.getVehicleId()} parked in spot ${this.spotName}.`);
        return true;
    }

    unparkVehicle() {
       if(this.isAvailable) {
            console.log('Parking spot is already empty.');
            return false;
        }
        console.log(`Vehicle ${this.vehicle.getVehicleId()} unparked from spot ${this.spotName}.`);
        this.vehicle = null;
        this.isAvailable = true;
        return true;
    }
}

module.exports = ParkingSpot;
