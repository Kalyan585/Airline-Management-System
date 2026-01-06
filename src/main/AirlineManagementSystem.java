import java.util.*;
import com.google.firebase.FirebaseApp;
import com.google.firebase.database.*;

public class AirlineManagementSystem {
    private DatabaseReference database;
    private List<Flight> flights;
    private List<Booking> bookings;
    private List<Passenger> passengers;
    
    public AirlineManagementSystem() {
        initializeFirebase();
        this.flights = new ArrayList<>();
        this.bookings = new ArrayList<>();
        this.passengers = new ArrayList<>();
    }
    
    private void initializeFirebase() {
        try {
            FirebaseApp.initializeApp();
            FirebaseDatabase db = FirebaseDatabase.getInstance();
            database = db.getReference();
        } catch (Exception e) {
            System.err.println("Firebase initialization failed: " + e.getMessage());
        }
    }
    
    // Add Flight
    public void addFlight(String flightId, String flightNumber, String departure, String arrival) {
        Flight flight = new Flight(flightId, flightNumber, departure, arrival);
        flights.add(flight);
        database.child("flights").child(flightId).setValue(flight);
    }
    
    // Book Flight
    public Booking bookFlight(String passengerId, String flightId) {
        Passenger passenger = getPassengerById(passengerId);
        Flight flight = getFlightById(flightId);
        
        if (passenger != null && flight != null) {
            String bookingId = UUID.randomUUID().toString();
            Booking booking = new Booking(bookingId, passengerId, flightId);
            bookings.add(booking);
            database.child("bookings").child(bookingId).setValue(booking);
            return booking;
        }
        return null;
    }
    
    // Add Passenger
    public void addPassenger(String passengerId, String name, String email, String phone) {
        Passenger passenger = new Passenger(passengerId, name, email, phone);
        passengers.add(passenger);
        database.child("passengers").child(passengerId).setValue(passenger);
    }
    
    // Get Flight by ID
    public Flight getFlightById(String flightId) {
        return flights.stream().filter(f -> f.getFlightId().equals(flightId)).findFirst().orElse(null);
    }
    
    // Get Passenger by ID
    public Passenger getPassengerById(String passengerId) {
        return passengers.stream().filter(p -> p.getPassengerId().equals(passengerId)).findFirst().orElse(null);
    }
    
    // Get all bookings for a passenger
    public List<Booking> getPassengerBookings(String passengerId) {
        return bookings.stream().filter(b -> b.getPassengerId().equals(passengerId)).toList();
    }
    
    // Cancel Booking
    public boolean cancelBooking(String bookingId) {
        boolean removed = bookings.removeIf(b -> b.getBookingId().equals(bookingId));
        if (removed) {
            database.child("bookings").child(bookingId).removeValue();
        }
        return removed;
    }
    
    public static void main(String[] args) {
        AirlineManagementSystem system = new AirlineManagementSystem();
        System.out.println("Airline Management System Initialized");
    }
}
