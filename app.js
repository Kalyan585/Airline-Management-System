// App.js - Main Application Logic

// Initialize variables
let flights = [];
let passengers = [];
let bookings = [];
let currentUser = null;

// DOM Elements
const bookingForm = document.getElementById('bookingForm');
const flightsList = document.getElementById('flightsList');
const bookingsList = document.getElementById('bookingsList');
const passengersList = document.getElementById('passengersList');
const flightSelect = document.getElementById('flightSelect');

// Event Listeners
if (bookingForm) {
    bookingForm.addEventListener('submit', handleBookingSubmit);
}

// Load initial data
window.addEventListener('DOMContentLoaded', () => {
    loadFlights();
    loadPassengers();
});

/**
 * Load flights from Firebase and display them
 */
function loadFlights() {
    getAllFlights().then(flightsData => {
        flights = flightsData;
        displayFlights();
        populateFlightSelect();
    }).catch(error => {
        console.error('Error loading flights:', error);
        flightsList.innerHTML = '<p class="empty-message">Error loading flights. Please check your Firebase configuration.</p>';
    });
}

/**
 * Display flights in the available flights section
 */
function displayFlights() {
    if (flights.length === 0) {
        flightsList.innerHTML = '<p class="empty-message">No flights available at this time.</p>';
        return;
    }

    flightsList.innerHTML = flights.map(flight => `
        <div class="flight-card">
            <h3>${flight.origin} → ${flight.destination}</h3>
            <div class="flight-details">
                <p><strong>Flight ID:</strong> ${flight.id}</p>
                <p><strong>Departure:</strong> ${flight.departureTime}</p>
                <p><strong>Available Seats:</strong> ${flight.availableSeats || flight.totalSeats}</p>
                <p><strong>Fare:</strong> $${flight.fare}</p>
            </div>
        </div>
    `).join('');
}

/**
 * Populate flight select dropdown
 */
function populateFlightSelect() {
    const options = flights.map(flight => 
        `<option value="${flight.id}">${flight.origin} → ${flight.destination} (${flight.departureTime})</option>`
    ).join('');
    flightSelect.innerHTML = '<option value="">Choose a flight</option>' + options;
}

/**
 * Load passengers from Firebase
 */
function loadPassengers() {
    getAllPassengers().then(passengersData => {
        passengers = passengersData;
        displayPassengers();
    }).catch(error => {
        console.error('Error loading passengers:', error);
    });
}

/**
 * Display passengers
 */
function displayPassengers() {
    if (passengers.length === 0) {
        passengersList.innerHTML = '<p class="empty-message">No passengers registered yet.</p>';
        return;
    }

    passengersList.innerHTML = passengers.map(passenger => `
        <div class="passenger-card">
            <h3>${passenger.name}</h3>
            <div class="passenger-details">
                <p><strong>Email:</strong> ${passenger.email}</p>
                <p><strong>Phone:</strong> ${passenger.phone}</p>
                <p><strong>DOB:</strong> ${passenger.dob}</p>
            </div>
        </div>
    `).join('');
}

/**
 * Handle booking form submission
 */
function handleBookingSubmit(e) {
    e.preventDefault();

    const passengerName = document.getElementById('passengerName').value;
    const passengerEmail = document.getElementById('passengerEmail').value;
    const passengerPhone = document.getElementById('passengerPhone').value;
    const passengerDOB = document.getElementById('passengerDOB').value;
    const flightId = document.getElementById('flightSelect').value;
    const seatNumber = parseInt(document.getElementById('seatNumber').value);

    if (!flightId) {
        alert('Please select a flight');
        return;
    }

    // Add passenger first
    const passengerData = {
        name: passengerName,
        email: passengerEmail,
        phone: passengerPhone,
        dob: passengerDOB
    };

    addPassengerToDatabase(passengerData).then(result => {
        // Add booking
        const bookingData = {
            passengerId: result.key || 'PASS_' + Date.now(),
            flightId: flightId,
            seatNumber: seatNumber,
            bookingDate: new Date().toISOString(),
            passengerName: passengerName
        };

        addBookingToDatabase(bookingData).then(() => {
            showSuccessMessage('Booking completed successfully!');
            bookingForm.reset();
            loadFlights();
            loadPassengers();
            loadMyBookings();
        }).catch(error => {
            alert('Error creating booking: ' + error.message);
        });
    }).catch(error => {
        alert('Error registering passenger: ' + error.message);
    });
}

/**
 * Show booking form
 */
function showBookingForm() {
    const bookingSection = document.getElementById('booking');
    bookingSection.scrollIntoView({ behavior: 'smooth' });
}

/**
 * Load and show user's bookings
 */
function loadMyBookings() {
    getAllBookings().then(bookingsData => {
        if (bookingsData.length === 0) {
            bookingsList.innerHTML = '<p class="empty-message">You have no bookings yet.</p>';
            return;
        }

        bookingsList.innerHTML = bookingsData.map(booking => `
            <div class="booking-card">
                <h3>Booking ID: ${booking.id.substring(0, 10)}...</h3>
                <div class="booking-details">
                    <p><strong>Passenger:</strong> ${booking.passengerName}</p>
                    <p><strong>Flight:</strong> ${booking.flightId}</p>
                    <p><strong>Seat:</strong> ${booking.seatNumber}</p>
                    <p><strong>Date:</strong> ${new Date(booking.bookingDate).toLocaleDateString()}</p>
                </div>
                <button class="btn btn-danger" onclick="cancelUserBooking('${booking.id}')">Cancel Booking</button>
            </div>
        `).join('');
    }).catch(error => {
        console.error('Error loading bookings:', error);
    });
}

/**
 * Show my bookings section
 */
function showMyBookings() {
    const myBookingsSection = document.getElementById('myBookings');
    myBookingsSection.scrollIntoView({ behavior: 'smooth' });
    loadMyBookings();
}

/**
 * Cancel a booking
 */
function cancelUserBooking(bookingId) {
    if (confirm('Are you sure you want to cancel this booking?')) {
        cancelBooking(bookingId).then(() => {
            showSuccessMessage('Booking cancelled successfully!');
            loadMyBookings();
            loadFlights();
        }).catch(error => {
            alert('Error cancelling booking: ' + error.message);
        });
    }
}

/**
 * Show success message
 */
function showSuccessMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'success-message';
    messageDiv.textContent = message;
    document.body.insertBefore(messageDiv, document.body.firstChild);
    setTimeout(() => messageDiv.remove(), 5000);
}
