# Firebase Setup Guide for Airline Management System

## Quick Setup (5 minutes)

### Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Create a project"**
3. Enter project name: `Airline-Management-System`
4. Accept the terms and click **"Create project"**
5. Wait for the project to be created

### Step 2: Enable Realtime Database

1. In Firebase Console, go to **Build → Realtime Database**
2. Click **"Create Database"**
3. Choose **"Start in test mode"** (for development)
4. Select your region (closest to you)
5. Click **"Enable"**

### Step 3: Get Your Firebase Credentials

1. Go to **Project Settings** (gear icon in top left)
2. Click on **"Your apps"** section
3. Click **"</>"** to add a web app
4. Enter app name: `Airline-Management-System`
5. Check **"Also set up Firebase Hosting"**
6. Click **"Register app"**
7. Copy the Firebase config object (you'll see something like below):

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  databaseURL: "https://your-project.firebaseio.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};
```

### Step 4: Update firebase-config.js

1. Go to your GitHub repository
2. Edit `firebase-config.js`
3. Replace the `YOUR_API_KEY`, `YOUR_PROJECT`, etc. with your actual credentials from Step 3
4. Save the file

### Step 5: Configure Database Rules

1. In Firebase Console, go to **Realtime Database → Rules**
2. Replace the rules with:

```json
{
  "rules": {
    "flights": {
      ".read": true,
      ".write": false
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

3. Click **"Publish"**

### Step 6: Add Sample Data (Optional)

To test the application, add sample flights:

1. Go to **Realtime Database** in Firebase Console
2. Click the **"+"** button next to "flights"
3. Create a new entry with this structure:

```
flights/
  FLIGHT_AI001/
    flightId: "AI001"
    origin: "Mumbai"
    destination: "Delhi"
    totalSeats: 180
    availableSeats: 180
    departureTime: "10:00 AM"
    fare: 5000
  FLIGHT_AI002/
    flightId: "AI002"
    origin: "Bangalore"
    destination: "Chennai"
    totalSeats: 150
    availableSeats: 150
    departureTime: "2:30 PM"
    fare: 3500
  FLIGHT_AI003/
    flightId: "AI003"
    origin: "New Delhi"
    destination: "Goa"
    totalSeats: 200
    availableSeats: 200
    departureTime: "6:15 PM"
    fare: 4500
```

## Verify Everything Works

1. Visit: https://kalyan585.github.io/Airline-Management-System/
2. Click "Available Flights" - you should see your flights
3. Try booking a flight
4. Check Firebase Console → Realtime Database to see the bookings being saved

## Troubleshooting

### Flights not loading?
- Check Firebase credentials in `firebase-config.js`
- Verify Firebase rules allow reading from "flights"
- Open browser console (F12) and check for errors

### Can't book flights?
- Ensure database rules allow writing to "passengers" and "bookings"
- Check that Firebase is initialized properly
- Clear browser cache and reload

### Need Help?
- Check browser console for Firebase errors
- Verify project ID matches in firebase-config.js
- Ensure Realtime Database is enabled in Firebase

## File Locations

- Firebase config: `firebase-config.js` (root directory)
- HTML file: `index.html` (root directory)
- JavaScript: `app.js` (root directory)
- Styling: `style.css` (root directory)

## Features Once Connected

✅ View available flights in real-time
✅ Register as a passenger
✅ Book flights with seat selection
✅ Cancel bookings
✅ Real-time data synchronization
✅ All data persisted in Firebase

---

**Created**: January 2026
**Last Updated**: January 2026
