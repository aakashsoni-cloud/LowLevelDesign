## Step 1 - Requirement Gathering
Functional Requirements
- Ability to parked the vehicle
- Support multiple floors
- Support multiple vehicles types
- Parking ticket generation
- Vehicle Entry and Exit
- Different Spot Types (Compact, Large, EV Charging, Handicapped, VIP)
- Spot allocation algorithum
- Display panel / Dashboard
- Spot Type
- Payment mode
    - Hourly Based
    - Lumpsum
    - Prepaid subscription (monthly/weekly)
    - Online (UPI, credit card) / Offline (cash)
- Booking / Reservation System
- Notifications & Alerts
    - Entry/Exit alert
    - Payment confirmation
    - Parking time nearing end


Non-Functional Requirements
- Avaliability
- Security
- Maintainability
- Low Coupling and High Cohesion
- Extensibility
- Fault Tolerance
- Real-time Monitoring
- Accessibility


## Step 2 - Identifying Entities and define relationships

<b>Vehicle</b>
- vehicleId - <UNIQUE>
- licensePlate
- vehicleType - (RELATIONSHIP) - ENUM -> Car, Electirc, Truck, 2 Wheeler, 3 Wheeler

<b>ParkingSpot</>
- spotId
- 
