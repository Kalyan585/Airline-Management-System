# Airline Management System - QUICK START GUIDE

## 🚀 Get the Application Fully Functional in 5 Minutes

### Current Status
✅ Application deployed at: https://kalyan585.github.io/Airline-Management-System/
✅ Frontend: HTML, CSS, JavaScript - READY
✅ Backend Logic: Java classes - READY
✅ Database Framework: Firebase configured - READY TO CONNECT

### What You Need to Do

The application is **99% ready**. You just need to connect your own Firebase database (free tier available).

## OPTION 1: Use Demo Firebase (Already Configured)

The application already has credentials for a demo Firebase database.

**Status**: The demo database may take time to load due to GitHub Pages CDN caching.

**To activate the demo:**
1. Wait 5-10 minutes for GitHub Pages to update the deployment
2. Visit: https://kalyan585.github.io/Airline-Management-System/
3. Hard refresh your browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
4. The application should load with sample flights

## OPTION 2: Use Your Own Firebase (Recommended)

### Step 1: Create a FREE Firebase Project (3 minutes)

1. Go to: https://console.firebase.google.com/
2. Click "Create a project"
3. Enter name: `Airline-Management-System`
4. Accept terms and click "Create"
5. Wait for project creation

### Step 2: Enable Realtime Database (2 minutes)

1. In Firebase console, go to **Build → Realtime Database**
2. Click **"Create Database"**
3. Choose **"Start in test mode"** (for development/testing)
4. Select a region close to you
5. Click **"Enable"**

### Step 3: Get Your Credentials (2 minutes)

1. Click the **Gear icon** (Settings) in top left
2. Go to **"Project Settings"**
3. Click the **"Your apps"** section
4. Click **"</>"** (Web icon) to add a web app
5. Enter app name: `Airline-Management-System`
6. Click **"Register app"**
7. **Copy the config object** - it looks like:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "your-project.firebaseapp.com",
  databaseURL: "https://your-project.firebaseio.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

### Step 4: Update the Configuration (2 minutes)

1. Go to: https://github.com/Kalyan585/Airline-Management-System/blob/main/firebase-config.js
2. Click the **pencil icon** (Edit)
3. Find this section (around line 6-14):
   ```javascript
   const firebaseConfig = {
       apiKey: "AIzaSyDwRyBBjjXlmI2V-kqNPBqjbxB8vXgZR6I",
       authDomain: "airline-management-5d8a3.firebaseapp.com",
       ...
   }
   ```
4. **Replace ONLY the values** with your Firebase credentials from Step 3
5. Click **"Commit changes..."**
6. Click **"Commit changes"** again to confirm

### Step 5: Configure Database Rules (1 minute)

1. In Firebase Console, go to **Realtime Database → Rules**
2. Replace everything with:

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

### Step 6: Add Sample Flights (Optional but Recommended - 2 minutes)

1. Go back to **Realtime Database** in Firebase
2. Click the **"+"** button next to "flights"
3. Add these flights one by one:

**Flight 1:**
```
FLIGHT_AI001
  flightId: "AI001"
  origin: "Mumbai"
  destination: "Delhi"
  totalSeats: 180
  availableSeats: 180
  departureTime: "10:00 AM"
  fare: 5000
```

**Flight 2:**
```
FLIGHT_AI002
  flightId: "AI002"
  origin: "Bangalore"
  destination: "Chennai"
  totalSeats: 150
  availableSeats: 150
  departureTime: "2:30 PM"
  fare: 3500
```

**Flight 3:**
```
FLIGHT_AI003
  flightId: "AI003"
  origin: "New Delhi"
  destination: "Goa"
  totalSeats: 200
  availableSeats: 200
  departureTime: "6:15 PM"
  fare: 4500
```

### Step 7: Verify It Works

1. After committing the changes, wait **5 minutes** for GitHub Pages to deploy
2. Visit: https://kalyan585.github.io/Airline-Management-System/
3. Do a hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
4. Click **"Available Flights"** - your flights should appear!
5. Try **"Book Flight"** and enter your details
6. Check **"My Bookings"** to see your bookings

## ✨ What You Can Now Do

✅ **View available flights** - Real-time from Firebase
✅ **Register as a passenger** - Data saved to Firebase
✅ **Book flights** - Automatic seat allocation
✅ **Cancel bookings** - Updates in real-time
✅ **View booking history** - Persistent data
✅ **See all passengers** - Community view

## 🔧 Troubleshooting

### Flights not loading?
- Clear browser cache: `Ctrl+Shift+Delete` (Windows) or `Cmd+Shift+Delete` (Mac)
- Wait 5 minutes for GitHub Pages to update
- Check Firebase console - ensure "flights" collection exists
- Verify your API key is correct in firebase-config.js

### Can't book flights?
- Ensure Firebase Realtime Database is enabled
- Check database rules allow writing to "passengers" and "bookings"
- Open browser console (F12) and look for Firebase errors

### Firebase errors?
- Verify your project credentials are correct
- Ensure Realtime Database is created (not Firestore)
- Check that databaseURL ends with ".firebaseio.com"

## 📁 Project Files

```
Airline-Management-System/
├── index.html              # Main application interface
├── style.css              # Beautiful purple gradient UI
├── app.js                 # Frontend logic & interactions
├── firebase-config.js     # Firebase integration
├── src/main/
│   └── AirlineManagementSystem.java  # Backend Java classes
├── FIREBASE_SETUP.md      # Detailed Firebase guide
├── DOCUMENTATION.md       # Complete technical documentation
└── QUICK_START.md         # This file
```

## 🎯 Next Steps

1. **Follow Option 2** above to set up your own Firebase
2. **Wait 5 minutes** for GitHub Pages to update
3. **Visit the application** and start booking flights!
4. **Share the link**: https://kalyan585.github.io/Airline-Management-System/

## ✅ Features Working Once Connected

- Real-time flight availability
- Passenger registration system
- Flight booking with seat selection
- Booking cancellation
- Persistent data storage
- Live data synchronization
- Beautiful responsive UI
- Mobile-friendly design

## 📞 Need Help?

Check the following files for detailed guides:
- `FIREBASE_SETUP.md` - Comprehensive Firebase setup
- `DOCUMENTATION.md` - Full technical documentation
- Browser console (F12) - Check for error messages

---

**You're just 5 minutes away from a fully functional airline booking system! 🚀**
