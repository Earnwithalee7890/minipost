# Post Search Mini App

A simple web application that allows users to search their posts by keywords.

## Features

- **User Authentication**: Simple login system
- **Create Posts**: Write and save posts to your account
- **Keyword Search**: Search your posts using 1 or 2 keywords
- **Real-time Results**: Instantly see matching posts with highlighted keywords
- **Delete Posts**: Remove posts you no longer want
- **Responsive Design**: Works on desktop and mobile devices

## Installation

1. Install Node.js if you haven't already (download from nodejs.org)

2. Open terminal/command prompt and navigate to the project folder:
   ```
   cd "f:\New folder (2)"
   ```

3. Install dependencies:
   ```
   npm install
   ```

## Running the App

1. Start the server:
   ```
   npm start
   ```

2. Open your browser and go to:
   ```
   http://localhost:3000
   ```

3. Enter a username to login (no password needed for this demo)

4. Start creating and searching posts!

## How to Use

1. **Login**: Enter any username to get started
2. **Create Post**: Type your message and click "Post"
3. **Search Posts**: Enter 1-2 keywords and click "Search" to find matching posts
4. **View All Posts**: Click "Show All" to see all your posts
5. **Delete Post**: Click the "Delete" button on any post to remove it

## Technology Stack

- **Backend**: Node.js with Express
- **Frontend**: HTML, CSS, JavaScript
- **Storage**: In-memory (data resets on server restart)

## Future Enhancements

- Add real database (MongoDB, PostgreSQL, etc.)
- User authentication with passwords
- Multi-user support with privacy
- Advanced search filters
- Post editing capability
- Categories and tags
- Export posts functionality

## Notes

- This is a demo app with in-memory storage
- Data will be lost when the server restarts
- For production use, implement a proper database
