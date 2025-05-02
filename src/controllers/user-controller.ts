import { ApiSuccess } from "@/utils/ApiSuccess";
import { Controller, Route, Tags, Get, Body, Query } from "tsoa";
import { ApiError } from "@/utils/ApiError";
import { UserService } from "services/user.service";
import { ApiResponse } from "interfaces/interfaces.common";


@Route("users")
@Tags("User")
export class UserController extends Controller {
 
  /**
   * Get all users with pagination
   * @param page Page number
   * @param limit Number of items per page
   */
  @Get("get-all-users")
  public async getAllUsers(@Query() page: number = 1, @Query() limit: number = 10): Promise<ApiResponse> {
    try {
      const userService = new UserService();
      return await userService.getAllUsers(page, limit);
    } catch (error) {
      throw new ApiError("Error retrieving users", 500);
    }
  }
}


