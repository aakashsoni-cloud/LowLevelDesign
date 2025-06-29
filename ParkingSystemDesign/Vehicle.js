class Vehicle {
    constructor(vehicleId, vehicleType, licensePlate) {
        this.vehicleId = vehicleId;
        this.vehicleType = vehicleType;
        this.licensePlate = licensePlate;
    }

    getVehicleId() {
        return this.vehicleId;
    }

    getVehicleType() {
        return this.vehicleType;
    }

    getLicensePlate() {
        return this.licensePlate;
    }
}

module.exports = Vehicle
