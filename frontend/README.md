# MyRoomie Frontend

MyRoomie is a mobile application designed to help users find roommates based on preferences and budget. The app features a map with heatmaps indicating areas of high demand and supply for rooms.

## Project Structure

- **App.js**: Main entry point for the application, setting up navigation and rendering components.
- **app.json**: Configuration settings for the Expo app, including app name, version, and icon.
- **assets/images**: Directory for image assets used in the application.
- **babel.config.js**: Babel configuration for the React Native project.
- **components**: Contains reusable components such as authentication forms, map views, and room cards.
- **navigation**: Sets up the navigation structure using react-navigation.
- **screens**: Contains various screens for authentication, home, map, matches, and user profiles.
- **services**: Functions for making API calls and handling authentication.
- **.env.example**: Example environment configuration for API URLs.
- **.gitignore**: Specifies files and directories to be ignored by Git.

## Getting Started

To get started with the MyRoomie frontend, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd myroomie/frontend
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the application**:
   ```
   npm start
   ```

4. **Open the app in Expo Go** or an emulator.

## Environment Variables

Make sure to create a `.env` file based on the `.env.example` provided, and configure your API URLs accordingly.

## Contributing

Feel free to submit issues or pull requests to improve the project. Your contributions are welcome!