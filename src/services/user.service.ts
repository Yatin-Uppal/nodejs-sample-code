import { ApiSuccess } from "../utils/ApiSuccess";

interface IUser {
  id: number;
  email: string;
  userName: string;
  phoneNumber: string;
}

const sampleUsers: IUser[] = [
  { id: 1, userName: "JohnDoe", email: "john.doe@example.com", phoneNumber: "+1234567890" },
  { id: 2, userName: "JaneSmith", email: "jane.smith@example.com", phoneNumber: "+1234567891" },
  { id: 3, userName: "BobWilson", email: "bob.wilson@example.com", phoneNumber: "+1234567892" },
  { id: 4, userName: "AliceJohnson", email: "alice.j@example.com", phoneNumber: "+1234567893" },
  { id: 5, userName: "CharlieBrown", email: "charlie.b@example.com", phoneNumber: "+1234567894" },
  { id: 6, userName: "DianaClark", email: "diana.c@example.com", phoneNumber: "+1234567895" },
  { id: 7, userName: "EvanTaylor", email: "evan.t@example.com", phoneNumber: "+1234567896" },
  { id: 8, userName: "FionaWhite", email: "fiona.w@example.com", phoneNumber: "+1234567897" },
  { id: 9, userName: "GeorgeHall", email: "george.h@example.com", phoneNumber: "+1234567898" },
  { id: 10, userName: "HelenMoore", email: "helen.m@example.com", phoneNumber: "+1234567899" },
  { id: 11, userName: "IanThomas", email: "ian.t@example.com", phoneNumber: "+1234567900" },
  { id: 12, userName: "JuliaGreen", email: "julia.g@example.com", phoneNumber: "+1234567901" },
  { id: 13, userName: "KevinLee", email: "kevin.l@example.com", phoneNumber: "+1234567902" },
  { id: 14, userName: "LauraPark", email: "laura.p@example.com", phoneNumber: "+1234567903" },
  { id: 15, userName: "MikeRoss", email: "mike.r@example.com", phoneNumber: "+1234567904" },
  { id: 16, userName: "NancyLiu", email: "nancy.l@example.com", phoneNumber: "+1234567905" },
  { id: 17, userName: "OscarChen", email: "oscar.c@example.com", phoneNumber: "+1234567906" },
  { id: 18, userName: "PamelaCruz", email: "pamela.c@example.com", phoneNumber: "+1234567907" },
  { id: 19, userName: "QuincyJones", email: "quincy.j@example.com", phoneNumber: "+1234567908" },
  { id: 20, userName: "RachelKim", email: "rachel.k@example.com", phoneNumber: "+1234567909" }
];

export class UserService {
  /**
   * Get all users
   */
  async getAllUsers(page: number = 1, limit: number = 10) {
    try {
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
      const paginatedUsers = sampleUsers.slice(startIndex, endIndex);
      
      const totalPages = Math.ceil(sampleUsers.length / limit);
      const pagination = {
        currentPage: page,
        totalPages: totalPages,
        totalItems: sampleUsers.length,
        itemsPerPage: limit
      };

      return new ApiSuccess(
        {
          users: paginatedUsers,
          pagination
        },
        "Users retrieved successfully",
        200
      );
    } catch (error) {
      throw error;
    }
  }
}
