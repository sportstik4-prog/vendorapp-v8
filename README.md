# Sportstik Vendor App

A comprehensive web and mobile-responsive vendor management application for sports venue owners and managers.

## Features

### 1. Authentication
- Mobile OTP-based login
- Role-based access control
- Secure session management

### 2. Dashboard
- Real-time revenue and booking statistics
- Live court occupancy status
- Upcoming bookings and coaching sessions
- Weekly revenue trends
- Quick action widgets

### 3. Booking Management
- Calendar and list view options
- Real-time booking status
- Player information and contact details
- Check-in/no-show marking
- Booking acceptance and cancellation
- Advanced filtering (by court, sport, date)

### 4. Court Management
- Court listing with status indicators
- Enable/disable courts
- Operating hours management
- Pricing configuration
- Amenities tracking
- Performance metrics per court
- Maintenance status updates

### 5. Games Management
- View all games hosted at venue
- Player lists and attendance
- Skill level visibility
- Game status tracking (confirmed, filling up)
- Contact organizers
- Support for public and invite-only games

### 6. Coaching & Academy Module
- Coach profile management
- Batch creation and management
- Session scheduling
- Attendance tracking
- Student enrollment
- Fee management
- Multiple training modes (1:1, Group, Online)

### 7. Player Management
- Player database with search
- Booking history per player
- Skill level tracking
- Rating and performance metrics
- Contact information
- Coaching session tracking
- Loyalty insights

### 8. Payments & Settlements
- Earnings dashboard (daily, weekly, monthly)
- Settlement history
- Commission breakdown
- Transaction tracking
- Refund request management
- Revenue reports by sport
- Bank account details

### 9. Notifications
- Real-time booking updates
- Cancellation alerts
- Settlement notifications
- Coaching session reminders
- Refund requests
- Customizable notification preferences
- Multi-channel support (Push, Email, WhatsApp)

### 10. Venue Profile
- Venue information management
- Operating hours configuration
- Amenities and sports offered
- Cancellation policy
- Image gallery
- Banking details
- Settings and preferences
- KYC status display

## Technology Stack

- **Frontend**: React 18.3.1
- **Routing**: React Router 7
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Date Handling**: date-fns
- **Charts**: Recharts

## Design Highlights

- Fully responsive (mobile, tablet, desktop)
- Clean, modern interface
- Intuitive navigation
- Real-time data updates
- Interactive charts and graphs
- Modal-based detail views
- Advanced filtering and search
- Status indicators and badges
- Color-coded metrics
- Accessible UI components

## Color Scheme

- Primary: Emerald (for success, revenue, active states)
- Blue: Bookings and calendar
- Purple: Coaching and academy
- Orange: Warnings and pending states
- Red: Cancellations and errors
- Gray: Neutral and disabled states

## Key User Flows

1. **Login Flow**: Phone → OTP → Dashboard
2. **Booking Flow**: View → Filter → Details → Action
3. **Court Management**: View Status → Edit → Save
4. **Settlement Flow**: View Earnings → Settlement Details → Download Invoice
5. **Coaching Flow**: Manage Coaches → Create Batches → Track Sessions

## Mock Data

All components use realistic mock data to demonstrate functionality:
- Sample bookings, courts, coaches, players
- Realistic Indian names, phone numbers, and addresses
- Transaction history
- Settlement records
- Notification examples

## Responsive Breakpoints

- Mobile: < 768px (single column, hamburger menu)
- Tablet: 768px - 1024px (2 columns, adapted layouts)
- Desktop: > 1024px (full sidebar, multi-column grids)

## Navigation Structure

```
/login - Authentication
/ - Dashboard
/bookings - Booking Management
/courts - Court Management
/games - Games Management
/coaching - Coaching Module
/players - Player Management
/payments - Payments & Settlements
/notifications - Notifications Center
/profile - Venue Profile
```

## Installation & Setup

This is a Vite + React application. To run:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Future Enhancements

- Real-time WebSocket connections
- Advanced analytics and reporting
- Calendar integration
- SMS/WhatsApp notifications
- Payment gateway integration
- QR code check-in
- Weather integration for outdoor courts
- Player rating system
- Loyalty programs
- Dynamic pricing
