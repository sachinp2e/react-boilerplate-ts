// API Configuration
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL,
  TIMEOUT: 30000, // 30 seconds
  HEADERS: {
    "Content-Type": "application/json",
  },
};

// API Endpoints
export const API_ENDPOINTS = {
  WALLET: {
    CONNECT_WALLET: "/connect",
    WALLET_DATA: "/data",
  },
};
