# Airline Management System - Complete Documentation

## Project Overview
This is a comprehensive Airline Management System built with Java (backend), HTML/CSS (frontend), and Firebase (real-time database). The system allows users to view available flights, book seats, manage passenger information, and track their bookings.

## Technology Stack

### Frontend
- **HTML5**: Semantic markup for the web interface
- **CSS3**: Modern responsive design with gradient backgrounds and smooth animations
- **JavaScript**: Interactive functionality and real-time data management
- **Firebase**: Real-time database integration

### Backend
- **Java**: Core business logic for flight, passenger, and booking management
- **Object-Oriented Design**: Uses classes for Flight, Passenger, and Booking entities

### Database
- **Firebase Realtime Database**: Cloud-based real-time NoSQL database
- Database structure:
  ```
  flights/
    FLIGHT_ID/
      flightId
      origin
      destination
      totalSeats
      availableSeats
      departureTime
      fare
  
  passengers/
    PASS_ID/
      name
      email
      phone
      dob
  
  bookings/
    BOOK_ID/
      bookingId
      passengerId
      flightId
      seatNumber
      bookingDate
  ```

## File Structure

```
Airline-Management-System/
├── index.html              # Main HTML page
├── style.css              # Styling for the application
├── app.js                 # Frontend application logic
├── firebase-config.js     # Firebase configuration and helper functions
├── src/
│   └── main/
│       └── AirlineManagementSystem.java  # Java backend classes
├── README.md              # Project README
└── DOCUMENTATION.md       # This file
```

## Features

### 1. Flight Management
- View all available flights
- Display flight details (origin, destination, departure time, fare, available seats)
- Real-time seat availability tracking
- Flight filtering and searching capabilities

### 2. Passenger Management
- Register new passengers
- Store passenger information (name, email, phone, date of birth)
- View all registered passengers
- Maintain passenger database

### 3. Flight Booking
- Book flights with seat selection
- Validate seat availability
- Generate unique booking IDs
- Store booking information with timestamps
- Support for multiple bookings per passenger

### 4. Booking Management
- View personal bookings
- Cancel bookings
- Update flight seat availability
- Track booking history

## Installation and Setup

### Prerequisites
- Node.js or Python (for local server)
- Firebase account
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Java Development Kit (JDK) for running Java backend

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Kalyan585/Airline-Management-System.git
   cd Airline-Management-System
   ```

2. **Setup Firebase**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Go to Project Settings and get your credentials
   - Update `firebase-config.js` with your Firebase credentials:
   ```javascript
   const firebaseConfig = {
       apiKey: "YOUR_API_KEY",
       authDomain: "YOUR_PROJECT.firebaseapp.com",
       databaseURL: "https://YOUR_PROJECT.firebaseio.com",
       projectId: "YOUR_PROJECT",
       storageBucket: "YOUR_PROJECT.appspot.com",
       messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
       appId: "YOUR_APP_ID"
   };
   ```

3. **Setup Firebase Database Rules**
   In Firebase Console, set the following database rules:
   ```json
   {
     "rules": {
       "flights": {
         ".read": true,
         ".write": true
       },
       "passengers": {
         ".read": true,
         ".write": true
       },
       "bookings": {
         ".read": true,
         ".write": true
       }
     }
   }
   ```

4. **Run Local Server**
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (with http-server package)
   npm install -g http-server
   http-server
   ```

5. **Access the Application**
   - Open your browser and navigate to `http://localhost:8000`
   - The application should load with the Airline Management System interface

## Usage Guide

### Viewing Flights
1. Click "Available Flights" in the navigation bar
2. All available flights will be displayed in a grid
3. Each flight card shows: origin, destination, departure time, available seats, and fare

### Booking a Flight
1. Click "Book Flight" in the navigation bar
2. Fill in passenger details:
   - Passenger Name
   - Email
   - Phone Number
   - Date of Birth
3. Select a flight from the dropdown
4. Enter desired seat number
5. Click "Book Flight" button
6. Confirmation message will appear upon successful booking

### Viewing Your Bookings
1. Click "My Bookings" in the navigation bar
2. All your bookings will be displayed with details:
   - Booking ID
   - Passenger Name
   - Flight ID
   - Seat Number
   - Booking Date
3. Click "Cancel Booking" button to cancel any booking

### Viewing Passengers
1. Click "Passengers" in the navigation bar
2. All registered passengers will be displayed
3. Each passenger card shows: name, email, phone, and date of birth

## Java Backend Classes

### AirlineManagementSystem
Main class that manages the entire system.

**Methods:**
- `addFlight(Flight flight)`: Add a new flight
- `getAllFlights()`: Get all flights
- `getFlightById(String flightId)`: Get specific flight
- `addPassenger(Passenger passenger)`: Register a passenger
- `getAllPassengers()`: Get all passengers
- `bookFlight(String passengerId, String flightId, int seatNumber)`: Book a flight
- `cancelBooking(String bookingId)`: Cancel a booking

### Flight Class
Represents an airline flight.

**Properties:**
- flightId: Unique identifier
- origin: Departure city
- destination: Arrival city
- totalSeats: Total seat capacity
- availableSeats: Remaining seats
- departureTime: Flight departure time
- fare: Ticket price

### Passenger Class
Represents a passenger.

**Properties:**
- passengerId: Unique identifier
- name: Passenger name
- email: Email address
- phone: Phone number
- dob: Date of birth

### Booking Class
Represents a flight booking.

**Properties:**
- bookingId: Unique identifier
- passengerId: Associated passenger
- flightId: Associated flight
- seatNumber: Assigned seat
- bookingDate: Booking timestamp

## Firebase Functions

### Firebase Configuration (firebase-config.js)

**Helper Functions:**
- `addFlightToDatabase(flightData)`: Add flight to Firebase
- `getAllFlights()`: Retrieve all flights
- `addPassengerToDatabase(passengerData)`: Add passenger
- `getAllPassengers()`: Retrieve all passengers
- `addBookingToDatabase(bookingData)`: Create booking
- `getAllBookings()`: Retrieve all bookings
- `updateFlight(flightId, updates)`: Update flight info
- `cancelBooking(bookingId)`: Remove booking

## Frontend Functions (app.js)

### Display Functions
- `displayFlights()`: Render available flights
- `displayPassengers()`: Render passenger list
- `populateFlightSelect()`: Fill flight dropdown

### Booking Functions
- `handleBookingSubmit(e)`: Process booking form
- `cancelUserBooking(bookingId)`: Handle booking cancellation
- `loadMyBookings()`: Fetch user bookings

### Navigation Functions
- `showBookingForm()`: Scroll to booking section
- `showMyBookings()`: Show user's bookings
- `loadFlights()`: Load and display flights
- `loadPassengers()`: Load and display passengers

## Styling

The application uses modern CSS with:
- **Gradient backgrounds**: Purple gradient (667eea to 764ba2)
- **Responsive grid layout**: Auto-fill columns
- **Smooth animations**: Hover effects and transitions
- **Mobile-friendly**: Media queries for smaller screens
- **Card-based design**: Modern card components

## API Integration

The application integrates with Firebase using the following endpoints:
- Flights: `database.ref('flights')`
- Passengers: `database.ref('passengers')`
- Bookings: `database.ref('bookings')`

All operations use real-time listeners for live data updates.

## Error Handling

The application includes error handling for:
- Firebase connection failures
- Invalid form inputs
- Booking validation errors
- Network timeouts
- Missing flight selection

## Future Enhancements

1. User authentication and login system
2. Payment integration
3. Email notifications for bookings
4. Advanced flight search and filters
5. Seat map visualization
6. Booking modification capabilities
7. Admin dashboard for flight management
8. PDF ticket generation
9. Multi-language support
10. Mobile app version

## Known Issues

None currently. Please report any issues found.

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is open source and available under the MIT License.

## Support

For support, please contact the project maintainers or open an issue on GitHub.

## Version History

- **v1.0.0** (January 2026): Initial release
  - Flight management
  - Passenger registration
  - Flight booking system
  - Responsive UI
  - Firebase integration

---

**Project Created**: January 6, 2026
**Last Updated**: January 6, 2026
