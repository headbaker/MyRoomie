import axios from 'axios';

const API_URL = process.env.API_URL || 'http://localhost:8000/api';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// User authentication
export const registerUser = async (userData) => {
  const response = await apiClient.post('/register', userData);
  return response.data;
};

export const loginUser = async (credentials) => {
  const response = await apiClient.post('/login', credentials);
  return response.data;
};

// Rooms
export const fetchRooms = async () => {
  const response = await apiClient.get('/rooms');
  return response.data;
};

export const createRoom = async (roomData) => {
  const response = await apiClient.post('/rooms', roomData);
  return response.data;
};

// Matches
export const fetchMatches = async () => {
  const response = await apiClient.get('/matches');
  return response.data;
};

export const createMatch = async (matchData) => {
  const response = await apiClient.post('/matches', matchData);
  return response.data;
};