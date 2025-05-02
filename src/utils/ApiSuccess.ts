// @desc Structures data from success with more relevant data
export class ApiSuccess<T> {
    success: boolean;
    message: string;
    data: T | T[];
    status: number;
 
    constructor(data: T, message: string, status: number) {
       this.success = true;
       this.data = data;
       this.status = status;
       this.message = message;
    }
 }