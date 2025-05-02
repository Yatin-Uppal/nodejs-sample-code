// @desc Structures data from error with more relevant data
export class ApiError<T> {
   success: boolean;
   message: string;
   data: boolean;
   status: number;
 
    constructor(message: string, status: number) {
      this.success = false;
      this.data = false;
      this.status = status;
      this.message = message;
    }
 }