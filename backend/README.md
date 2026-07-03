# Portfolio Backend

Backend server for the portfolio contact form with email functionality and database storage.

## Features

- Express.js server for API endpoints
- MongoDB integration for message storage
- Nodemailer for email notifications
- CORS enabled for frontend communication

## Prerequisites

- Node.js installed
- MongoDB installed and running locally
- Gmail account with App Password (for email sending)

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables in `.env`:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_TO=kemalelias67@gmail.com
```

3. Get Gmail App Password:
   - Go to Google Account settings
   - Enable 2-factor authentication
   - Go to Security > App Passwords
   - Generate a new app password
   - Use this password in `EMAIL_PASS`

4. Start MongoDB (if not running):
```bash
# Windows
mongod

# Or use MongoDB Compass to connect
```

5. Start the server:
```bash
npm start
```

The server will run on `http://localhost:5000`

## API Endpoints

### POST /api/contact
Send a contact form message.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "Your message here"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully!"
}
```

### GET /api/messages
Get all stored messages (optional - for admin panel).

**Response:**
```json
[
  {
    "_id": "...",
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Project Inquiry",
    "message": "Your message here",
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
]
```

## How It Works

1. When a user submits the contact form from the frontend
2. The request is sent to `/api/contact`
3. The message is saved to MongoDB
4. An email is sent to your configured email address
5. Success response is sent back to the frontend

## Troubleshooting

**MongoDB Connection Error:**
- Make sure MongoDB is running
- Check the MONGODB_URI in .env

**Email Not Sending:**
- Verify Gmail App Password is correct
- Check EMAIL_USER and EMAIL_PASS in .env
- Ensure Gmail allows less secure apps or use App Password

**CORS Error:**
- Make sure backend is running on port 5000
- Check frontend is calling correct API URL
