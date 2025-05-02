export interface User {
  name: string;
}

// Interface for custom class ApiError
export interface ApiError extends Error {
  success: boolean;
  message: string;
  statusCode: number;
  data: any[] | Record<string, any>;
}

export interface ApiResponse {
  success: boolean;
  data: any;
  message: string;
  status: number;
}