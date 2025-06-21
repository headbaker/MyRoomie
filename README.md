# MyRoomie

MyRoomie is a mobile application designed to help users find roommates based on their preferences and budget. The app features a map interface that displays heatmaps indicating areas of high demand and supply for rooms.

## Project Structure

The project consists of two main components: the frontend and the backend.

### Frontend

The frontend is built using React Native with Expo, providing a seamless experience on both iOS and Android devices. Key features include:

- **Authentication**: Users can register and log in to the app.
- **Map View**: A component that displays a map with heatmaps for room availability.
- **Match System**: Users can view potential matches based on their preferences.

### Backend

The backend is built using FastAPI, providing a robust API for handling user authentication, room management, and match functionalities. Key features include:

- **User Authentication**: Endpoints for user registration and login.
- **Room Management**: Endpoints for publishing and retrieving room listings.
- **Match System**: Endpoints for fetching potential matches based on user preferences.

### Prerequisites

- Node.js and npm (for the frontend)
- Python 3.7+ and pip (for the backend)
- PostgreSQL with PostGIS extension

### Frontend Setup

1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the Expo development server:
   ```
   npm start
   ```

### Backend Setup

1. Navigate to the `backend` directory.
2. Create a virtual environment and activate it:
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```
3. Install dependencies:
   ```
   pip install -r requirements.txt
   ```
4. Run the FastAPI application:
   ```
   uvicorn app.main:app --reload
   ```

## License

This project is licensed under the MIT License. See the LICENSE file for details.