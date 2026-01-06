// Firebase Configuration
// Replace these with your own Firebase credentials from https://console.firebase.google.com/
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT.firebaseio.com",
    projectId: "YOUR_PROJECT",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get reference to the database
const database = firebase.database();

// Export database reference for use in other files
const dbRef = database.ref();

// Helper functions for Firebase operations

/**
 * Add a flight to the database
 * @param {Object} flightData - Flight data object
 */
function addFlightToDatabase(flightData) {
    const flightId = 'FLIGHT_' + Date.now();
    return database.ref('flights/' + flightId).set(flightData);
}

/**
 * Get all flights from the database
 */
function getAllFlights() {
    return new Promise((resolve, reject) => {
        database.ref('flights').on('value', (snapshot) => {
            const flights = [];
            snapshot.forEach((childSnapshot) => {
                flights.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            resolve(flights);
        }, (error) => {
            reject(error);
        });
    });
}

/**
 * Add a passenger to the database
 * @param {Object} passengerData - Passenger data object
 */
function addPassengerToDatabase(passengerData) {
    const passengerId = 'PASS_' + Date.now();
    return database.ref('passengers/' + passengerId).set(passengerData);
}

/**
 * Get all passengers from the database
 */
function getAllPassengers() {
    return new Promise((resolve, reject) => {
        database.ref('passengers').on('value', (snapshot) => {
            const passengers = [];
            snapshot.forEach((childSnapshot) => {
                passengers.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            resolve(passengers);
        }, (error) => {
            reject(error);
        });
    });
}

/**
 * Add a booking to the database
 * @param {Object} bookingData - Booking data object
 */
function addBookingToDatabase(bookingData) {
    const bookingId = 'BOOK_' + Date.now();
    return database.ref('bookings/' + bookingId).set(bookingData);
}

/**
 * Get all bookings from the database
 */
function getAllBookings() {
    return new Promise((resolve, reject) => {
        database.ref('bookings').on('value', (snapshot) => {
            const bookings = [];
            snapshot.forEach((childSnapshot) => {
                bookings.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            resolve(bookings);
        }, (error) => {
            reject(error);
        });
    });
}

/**
 * Update a flight in the database
 * @param {String} flightId - Flight ID
 * @param {Object} updates - Updates to apply
 */
function updateFlight(flightId, updates) {
    return database.ref('flights/' + flightId).update(updates);
}

/**
 * Cancel a booking from the database
 * @param {String} bookingId - Booking ID
 */
function cancelBooking(bookingId) {
    return database.ref('bookings/' + bookingId).remove();
}
