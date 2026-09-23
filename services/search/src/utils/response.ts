export interface ApiResponse<T> { success: boolean; data?: T; error?: string; meta?: any; }
export const successResponse = <T>(data: T, meta?: any): ApiResponse<T> => ({ success: true, data, meta });
export const errorResponse = (error: string): ApiResponse<any> => ({ success: false, error });
