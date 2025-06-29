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
- vehicleId
- licensePlate
- vehicleType (ENUM) IS-A-RELATIONSHIP  -> (CAR, ELECTRIC_CAR, TRUCK, TWO_WHEELER, THREE_WHEELER)

</br>

<b>ParkingSpot</b>
-- Associated with a vehicle
- spotId
- spotName
- spotType (ENUM) IS-A-RELATIONSHIP -> (COMPACT, LARGE, EV_CHARGING, HANDICAPPED, VIP)
- isAvailable
- isClosed
- sensorId
- floorNumber: Help to decide the floor to parking spot

- +parkVehicle(vehicle) -> Associated with the vechile
- +unparkVehicle(vehicle)
- +isAvaliable()

</br>

<b>ParkingFloor</b>
- floorId
- floorNumber
- isFull
- isClosed
- parkingSpots: List[<ParkingSpot>]  => Composition Relationship
- floorDisplay

- +getAvaliableParkingSpot(spotType): spot
- +allocateSpot(vehicle)
- +removeSpot(spot)
- +getOccupiedSpot(): List[<Spot>]
- markFull()
- unmarkFull()
- +updateDisplayBoard()
- +parkVechile(vehicle, spot): spot
     * spot.parVehicle(vehicle)
- +unparkVehicle(vehicle, spot)
     * spot.unparkVehicle(vehicle)

</br>

<b>ParkingLot</b>
- lotId
- name
- address
- parkingFloors: List[<ParkingFloor>]
- isClosed
- isFull
- entryPanel
- exitPanel
- displayPanel
- ticketSystem

- +parkVehicle(vehicle): Ticket 
    * loop throught the floors and allow parking
       * if the parking floor is full / closed then
       * delegrate the parking floor

    * Get avaliable spot
        * Iterate over the floors
        * Figure out the appropriate spot
    
    * use entryPanel to see available space  

- +exitVehicle(Ticket)
- +updateDisplayPanel
- +addFloors(floor)

</br>

<b>ParkingTicket</b>
- ticketId
- vehicle: Vehicle
- spot: ParkingSpot
- entryTime
- exitTime
- status: ACTIVE/CLOSED
- isPaid
- floor: ParkingFloor
- totalCost
- paymentStatus: PaymentService

</br>

<b>EntryGate</b>
- gateId
- paymentPlan: (ENUM) IS-A-RELATIONSHIP  -> (hourly, Daily)

- +generateTicket(vehicle, spot, floor): ParkingTicket
- +openGate()
- +closeGate()

</br>

<b>ExitGate</b>
- checkout(ParkingTicket)
- calculateAmount(vehicle, spot, entryTime, exitTime): Numeric Value

</br>

<b>Payment</B>
- paymentMode: (ENUM) IS-A-RELATIONSHIP -> (UPI, CARD)

- +makePayment(ticket, paymentMethod)
- +refund()