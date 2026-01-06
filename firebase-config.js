// Firebase Configuration
// DEMO VERSION - Working with public Firebase database
// This demo database has sample flights pre-loaded
// To use your own Firebase project, follow instructions in FIREBASE_SETUP.md

const firebaseConfig = {
    apiKey: "AIzaSyDwRyBBjjXlmI2V-kqNPBqjbxB8vXgZR6I",
    authDomain: "airline-management-5d8a3.firebaseapp.com",
    databaseURL: "https://airline-management-5d8a3-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "airline-management-5d8a3",
    storageBucket: "airline-management-5d8a3.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:abcdef1234567890abcd"
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
 */
function addPassengerToDatabase(passengerData) {
    const passengerId = 'PASS_' + Date.now();
    return database.ref('passengers/' + passengerId).set(passengerData)
        .then(() => ({ key: passengerId }))
        .catch(error => { throw error; });
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
 */
function addBookingToDatabase(bookingData) {
    const bookingId = 'BOOK_' + Date.now();
    return database.ref('bookings/' + bookingId).set(bookingData)
        .then(() => ({ key: bookingId }))
        .catch(error => { throw error; });
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
 */
function updateFlight(flightId, updates) {
    return database.ref('flights/' + flightId).update(updates);
}

/**
 * Cancel a booking from the database
 */
function cancelBooking(bookingId) {
    return database.ref('bookings/' + bookingId).remove();
}
