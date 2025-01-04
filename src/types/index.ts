// Common types used across the application
export interface User {
  id: string;
  email: string;
  name: string;
}

export interface ApiError {
  message: string;
  code: string;
}