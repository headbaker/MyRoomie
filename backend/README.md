# MyRoomie Backend

## Overview
MyRoomie is a mobile application designed to help users find roommates based on preferences and budget. The application features a map with heatmaps indicating areas of high demand and supply for rooms.

## Tech Stack
- **Frontend**: React Native with Expo
- **Backend**: FastAPI (Python)
- **Database**: PostgreSQL with PostGIS for geospatial data support

## Features
- User authentication (register and login)
- Room management (publish and view rooms)
- Match system based on user preferences
- Geospatial data handling for heatmaps

## Setup Instructions

### Prerequisites
- Python 3.7 or higher
- PostgreSQL with PostGIS extension
- pip for Python package management

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd myroomie/backend
   ```

2. Create a virtual environment:
   ```
   python -m venv venv
   activate: `venv\Scripts\activate`
   ```

3. Install the required packages:
   ```
   pip install -r requirements.txt
   ```

4. Set up the database:
   - Create a PostgreSQL database and enable PostGIS.
   - Update the `.env` file with your database connection details.

5. Run the application:
   ```
   uvicorn app.main:app --reload
   ```

### API Endpoints
- **Authentication**
  - `POST /register`: Register a new user
  - `POST /login`: Log in an existing user

- **Users**
  - `GET /users`: Retrieve user information

- **Rooms**
  - `POST /rooms`: Publish a new room
  - `GET /rooms`: Retrieve published rooms

- **Matches**
  - `GET /matches`: Retrieve matches based on user preferences

## Environment Variables
Refer to the `.env.example` file for the required environment variables.

## License
This project is licensed under the MIT License.