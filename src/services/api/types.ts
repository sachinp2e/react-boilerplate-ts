// API Response Types
export interface ApiResponse<T> {
  data: T;
  error?: string;
  status: number;
}

// API Error Type
export interface ApiError {
  message: string;
  code?: string;
  status?: number;
}

// API State Interface
export interface ApiState {
  isLoading: boolean;
  error: ApiError | null;
}

// Generic API Context State
export interface ApiContextState extends ApiState {
  clearError: () => void;
}
