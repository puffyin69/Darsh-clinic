# Real-Time Clinic Status Logic Documentation

## Overview
This document explains the implementation of the dynamic clinic status micro-interaction in the hero section of Darsh Dental Clinic website.

## Business Requirements
- **Operating Hours**: Monday-Saturday 9:30 AM - 1:00 PM & 4:30 PM - 8:00 PM
- **Closed**: Sundays (full day)
- **Real-Time Updates**: Status should reflect current availability
- **User Guidance**: Show when clinic opens/closes next

---

## Technical Implementation

### 1. Core Function: `checkClinicStatus()`

#### Purpose
Determines current clinic status based on day of week and time of day.

#### Logic Flow
```javascript
1. Get current date/time using JavaScript Date object
2. Extract day (0=Sunday, 1=Monday, ..., 6=Saturday)  
3. Convert current time to minutes for easy comparison
4. Compare against business hour ranges
5. Return status object with isOpen, message, and nextChange
```

#### Time Conversion Logic
```javascript
const currentTime = hours * 60 + minutes;
// Example: 10:30 AM = (10 * 60) + 30 = 630 minutes
```

#### Business Hours in Minutes
```javascript
Morning Session:  570 - 780 minutes  (9:30 AM - 1:00 PM)
Evening Session:  990 - 1200 minutes (4:30 PM - 8:00 PM)
```

---

## Status Detection Matrix

| Day | Time Range | Status | Message | Next Change |
|-----|------------|--------|---------|-------------|
| Sunday | Any Time | ❌ Closed | "Closed Today" | "Opens Monday 9:30 AM" |
| Mon-Sat | 9:30 AM - 1:00 PM | ✅ Open | "Open Now" | "Closes at 1:00 PM" |
| Mon-Sat | 4:30 PM - 8:00 PM | ✅ Open | "Open Now" | "Closes at 8:00 PM" |
| Mon-Sat | 1:00 PM - 4:30 PM | ❌ Closed | "Lunch Break" | "Opens at 4:30 PM" |
| Mon-Sat | Before 9:30 AM | ❌ Closed | "Opens Soon" | "Opens at 9:30 AM" |
| Mon-Sat | After 8:00 PM | ❌ Closed | "Closed Today" | "Opens Tomorrow 9:30 AM" |

---

## React Implementation

### State Management
```javascript
const [clinicStatus, setClinicStatus] = useState({
  isOpen: false,    // Boolean: clinic currently open
  message: "",      // String: display message for user  
  nextChange: ""    // String: when status will change next
});
```

### Auto-Update Mechanism
```javascript
useEffect(() => {
  // Initial status check on component mount
  setClinicStatus(checkClinicStatus());
  
  // Update every 60 seconds
  const interval = setInterval(() => {
    setClinicStatus(checkClinicStatus());
  }, 60000);
  
  // Cleanup on unmount
  return () => clearInterval(interval);
}, []);
```

### Dynamic UI Components

#### Status Indicator
- **Open**: Green CheckCircle icon + green border
- **Closed**: Red XCircle icon + red border

#### Conditional Styling
```javascript
className={`... ${clinicStatus.isOpen ? 'border-green-200' : 'border-red-200'}`}
```

---

## Edge Cases Handled

### 1. Weekend Transitions
- **Saturday after 8 PM**: Shows "Opens Monday 9:30 AM" 
- **Sunday**: Always shows "Opens Monday 9:30 AM"

### 2. Lunch Break Detection
- **1:00 PM - 4:30 PM**: Shows "Lunch Break" with evening opening time

### 3. Early Morning
- **Before 9:30 AM**: Shows "Opens Soon" with morning opening time

### 4. Late Evening
- **After 8:00 PM**: Shows next day opening (or Monday if weekend)

---

## Performance Considerations

### Efficiency
- ✅ **No API Calls**: Pure client-side calculation
- ✅ **Minimal CPU Usage**: Simple arithmetic operations
- ✅ **Memory Safe**: Proper interval cleanup
- ✅ **Update Frequency**: Once per minute (optimal balance)

### Browser Compatibility
- ✅ **Modern Browsers**: Uses standard Date object
- ✅ **Timezone Aware**: Uses user's local time
- ✅ **No External Dependencies**: Pure JavaScript logic

---

## Customization Guide

### Changing Business Hours
```javascript
// Modify these constants in checkClinicStatus()
const morningStart = 9 * 60 + 30;  // 9:30 AM
const morningEnd = 13 * 60;        // 1:00 PM  
const eveningStart = 16 * 60 + 30; // 4:30 PM
const eveningEnd = 20 * 60;        // 8:00 PM
```

### Adding Holiday Support
```javascript
// Add holiday checking logic
const holidays = ['2025-12-25', '2025-01-01']; // Christmas, New Year
const today = now.toISOString().split('T')[0];
if (holidays.includes(today)) {
  return { isOpen: false, message: "Closed - Holiday", nextChange: "..." };
}
```

### Modifying Update Frequency
```javascript
// Change 60000 to desired milliseconds
const interval = setInterval(() => {
  setClinicStatus(checkClinicStatus());
}, 30000); // Update every 30 seconds
```

---

## User Experience Benefits

### Clear Communication
- ✅ Users know exact clinic availability
- ✅ Eliminates confusion about operating hours
- ✅ Reduces unnecessary phone calls

### Real-Time Accuracy
- ✅ Status updates automatically
- ✅ No manual intervention required
- ✅ Always reflects current availability

### Visual Feedback
- ✅ Color-coded status (green=open, red=closed)
- ✅ Intuitive icons (check=open, X=closed)
- ✅ Predictive information (when opens/closes next)

---

## File Location
- **Component**: `/components/HeroSection.jsx`
- **Implementation**: Lines 11-80 (approx.)
- **Dependencies**: React hooks (useState, useEffect), Lucide icons

## Last Updated
November 15, 2025

---

*This documentation serves as a reference for developers working on the Darsh Dental Clinic website's real-time status feature.*