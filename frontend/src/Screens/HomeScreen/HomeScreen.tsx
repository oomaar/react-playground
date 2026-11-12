import { useEffect, useState } from "react";
import { UsersResponseDTO } from "../../models/userModels/UsersResponseDTO";
import axios from "axios";
import styled from "styled-components";
import { Button } from "../../components/Button/Button";
import { AddUserModal } from "./AddUserModal/AddUserModal";

export function HomeScreen() {
  const [usersResponse, setUsersResponse] = useState<
    UsersResponseDTO | undefined
  >(undefined);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(
        "http://localhost:4000/api/users?page=1&limit=10",
      );

      return res.data;
    };

    fetchUsers().then((res) => setUsersResponse(res));
  }, []);

  if (!usersResponse) return <>Error...</>;

  return (
    <HomeScreenContainer>
      <HomeScreenHeader>
        <HomeScreenTitle>Users</HomeScreenTitle>
        <AddUserModal />
      </HomeScreenHeader>
      <HomeScreenUsersList>
        {usersResponse.data.map((user) => (
          <div key={user.id}>
            <p>{user.username}</p>
            <p>{user.firstName}</p>
            <p>{user.lastName}</p>
            <p>{user.phone}</p>
          </div>
        ))}
      </HomeScreenUsersList>
    </HomeScreenContainer>
  );
}

const HomeScreenContainer = styled.div``;

const HomeScreenHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0px;
`;

const HomeScreenTitle = styled.p`
  font-size: 24px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const HomeScreenUsersList = styled.ul``;
