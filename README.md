# CometPro 🌟

A comprehensive campus organization hub for UT Dallas that helps students discover, track, and engage with student organizations and their events. CometPro makes it easy to stay connected with campus life by centralizing all organization information, events, and important links in one place.

## Overview

CometPro is a web application designed to enhance student engagement at UT Dallas by providing a centralized platform for exploring campus organizations. Students can browse all registered organizations, view upcoming events, save their favorite organizations, and receive updates about new events — all through an intuitive and user-friendly interface.

## Features

- **📋 Organization Directory**: Browse a complete list of all campus organizations
- **📅 Event Calendar**: View all upcoming events from organizations across campus
- **🔖 Save Organizations**: Bookmark your favorite organizations for quick access
- **🔔 Event Tracking**: Get notified when saved organizations post new events
- **🔗 Important Links**: Quick access to organization websites, social media, and resources
- **🔍 Search & Filter**: Easily find organizations by category, name, or interest
- **📱 Responsive Design**: Seamless experience across all devices
- **⚡ Real-time Updates**: Stay current with the latest organization activities

## Tech Stack

- **HTML5** - Semantic structure and content
- **CSS3** - Modern styling with responsive layouts
- **JavaScript** - Interactive features and dynamic content
- **LocalStorage** - Client-side data persistence for saved organizations

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- Basic web server (optional, for local development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/cookiesandcreamm/CometPro.git
   cd CometPro
   ```

2. **Open the project**
   
   Option 1: Direct file opening
   ```bash
   # Simply open index.html in your browser
   open index.html  # macOS
   start index.html # Windows
   ```
   
   Option 2: Using a local server (recommended)
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   ```
   
   Then navigate to `http://localhost:8000`

3. **Start exploring!**
   Browse organizations, save your favorites, and track events.

## Usage

### For Students

1. **Browse Organizations**: Explore the complete directory of campus organizations
2. **View Details**: Click on any organization to see their description, events, and links
3. **Save Favorites**: Click the save/bookmark button to add organizations to your list
4. **Track Events**: View all upcoming events from your saved organizations
5. **Access Resources**: Use quick links to visit organization websites and social media

### Managing Saved Organizations

- **Add**: Click the "Save" or "⭐" button on any organization card
- **Remove**: Click the "Unsave" button or remove from your saved list
- **View Updates**: Check your dashboard for new events from saved organizations

## Features in Detail

### Organization Directory
- Complete list of all registered UTD organizations
- Categories: Academic, Cultural, Professional, Social, Service, Sports, and more
- Detailed organization profiles with descriptions and contact information

### Event Calendar
- Chronological view of all upcoming campus events
- Filter events by organization, date, or category
- Event details including time, location, and RSVP information

### Saved Organizations Dashboard
- Personalized feed of your followed organizations
- Highlighted new events from saved organizations
- Quick access to saved organization pages

### Important Links Hub
- Direct links to organization websites
- Social media profiles (Instagram, Twitter, Facebook, Discord)
- Email contacts and meeting schedules
- Registration and membership forms

## Data Structure

### Organization Object
```javascript
{
  id: "unique-id",
  name: "Organization Name",
  category: "Academic",
  description: "Brief description...",
  email: "contact@email.com",
  website: "https://website.com",
  socialMedia: {
    instagram: "@handle",
    twitter: "@handle",
    discord: "invite-link"
  },
  meetingTime: "Tuesdays 7PM",
  location: "JSOM 1.102"
}
```

### Event Object
```javascript
{
  id: "event-id",
  organizationId: "org-id",
  title: "Event Name",
  description: "Event description...",
  date: "2025-11-15",
  time: "6:00 PM",
  location: "Student Union",
  rsvpLink: "https://rsvp-link.com"
}
```

## Local Storage

CometPro uses browser LocalStorage to persist user preferences:

```javascript
// Saved organizations
localStorage.setItem('savedOrganizations', JSON.stringify([orgId1, orgId2]))

// User preferences
localStorage.setItem('userPreferences', JSON.stringify({
  theme: 'light',
  notifications: true
}))
```

### Alternative Hosting
- **Netlify**: Drag and drop the project folder
- **Vercel**: Connect GitHub repository for automatic deployment
- **Firebase Hosting**: Use Firebase CLI for deployment

## Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ⚠️ IE11 (limited support)
