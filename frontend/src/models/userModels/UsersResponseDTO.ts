import { UserDTO } from "./UserDTO";

export type UsersResponseDTO = {
  total: number;
  limit: number;
  page: number;
  data: UserDTO[];
};
