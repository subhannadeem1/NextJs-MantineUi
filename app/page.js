"use client";

import Header from "./component/header";
import { useEffect, useState } from "react";
import {
  Group,
  Avatar,
  Text,
  Box,
  Button,
  Input,
  Table,
  Flex,
  Checkbox,
  Pagination,
} from "@mantine/core";
import { IconSearch, IconTrash } from "@tabler/icons-react";
import DeleteModal from "./component/modal/DeleteModal";
import { getAllUsersDelete, deleteUser } from "./api/user";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedRows, setSelectedRows] = useState([]);
  const [showCheckboxes, setShowCheckboxes] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 4;

  useEffect(() => {
    const fetchUsers = async () => {
      const usersData = await getAllUsersDelete();
      if (usersData.error) {
        console.error("Error fetching users:", usersData.error);
      } else {
        setUsers(usersData);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (user) => {
    if (!user || !user.id) {
      console.error("User or User ID is missing");
      return;
    }
  
    console.log("Deleting user with ID:", user.id); // Log the ID for debugging
  
    const response = await deleteUser(user.id);
    const error = response?.error; // Safely access `error` property
  
    if (error) {
      console.error("Error deleting user:", error);
    } else {
      setUsers(users.filter(u => u.id !== user.id));
      setShowModal(false);
    }
  };

  const handleTrashClick = () => {
    setShowCheckboxes(!showCheckboxes);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    setCurrentPage(1); // Reset to the first page when searching
  };

  const filteredUsers = users.filter(
    (user) =>
      `${user.firstName} ${user.lastName}`
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.occupation.toLowerCase().includes(search.toLowerCase()) ||
      user.dateOfBirth.toLowerCase().includes(search.toLowerCase()) ||
      user.gender.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const paginatedUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const rows = paginatedUsers.map((user, index) => (
    <Table.Tr
      key={user.id} // Use user.id as the key
      bg={
        selectedRows.includes(index)
          ? "var(--mantine-color-blue-light)"
          : undefined
      }
    >
      {showCheckboxes && (
        <Table.Td>
          <Checkbox
            aria-label="Select row"
            checked={selectedRows.includes(index)}
            onChange={(event) =>
              setSelectedRows(
                event.currentTarget.checked
                  ? [...selectedRows, index]
                  : selectedRows.filter((i) => i !== index)
              )
            }
          />
        </Table.Td>
      )}
      <Table.Td>
        <Group gap={7}>
          <Avatar
            src="https://png.pngtree.com/element_our/png/20181102/avatar-profile-logo-vector-emblem-illustration-modern-illustration-png_227485.jpg"
            alt={`${user.firstName} ${user.lastName}`}
            radius="xl"
            style={{
              width: 36,
              height: 36,
            }}
          />
          <div>
            <Text mb={5} fw={500} size="sm" lh={1} mr={3}>
              {user.firstName} {user.lastName}
            </Text>
            <Text
              fw={400}
              size="sm"
              lh={1}
              mr={3}
              style={{
                color: "#959EAD",
              }}
            >
              {user.email}
            </Text>
          </div>
        </Group>
      </Table.Td>
      <Table.Td>{user.occupation}</Table.Td>
      <Table.Td>{user.dateOfBirth}</Table.Td>
      <Table.Td>{user.gender}</Table.Td>
      <Table.Td>
        {showCheckboxes ? (
          <Button
            variant="filled"
            color="#00AB46"
            radius="lg"
            onClick={() => {
              setUserToDelete(user); // Set user to delete
              setShowModal(true);
            }}
          >
            Delete
          </Button>
        ) : (
          <Button variant="filled" color="#00AB46" radius="lg">
            Message
          </Button>
        )}
        <DeleteModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onDelete={() => userToDelete && handleDelete(userToDelete)}
          user={userToDelete}
        />
      </Table.Td>
    </Table.Tr>
  ));

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  return (
    <>
      <Header />
      <Box
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Box ml={160} mr={160} mt="40px">
          <Flex gap="md" align={"center"} justify={"center"} width={"100%"}>
            <Input
              w={"100%"}
              variant="filled"
              rightSection={
                <div style={{ paddingRight: "20px", borderRadius: "5px" }}>
                  <IconSearch />
                </div>
              }
              placeholder="Search by user name, occupation..."
              value={search}
              onChange={handleSearchChange}
            />
            <Box>
              <IconTrash
                style={{
                  cursor: "pointer",
                  backgroundColor: "#00AB46",
                  width: "42px",
                  height: "42px",
                  borderRadius: "5px",
                }}
                onClick={() => setShowCheckboxes(!showCheckboxes)}
              />
            </Box>
          </Flex>

          <Table
            striped
            withRowBorders={false}
            style={{
              height: "77px",
            }}
          >
            <Table.Thead>
              <Table.Tr>
                {showCheckboxes && <Table.Th />}
                <Table.Th>Name of users</Table.Th>
                <Table.Th>Occupation</Table.Th>
                <Table.Th>Date of Birth</Table.Th>
                <Table.Th>Gender</Table.Th>
                <Table.Th>Action</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
          <Box>
            <Flex mt={30} mb={50} ml={"90%"}>
              <Pagination
                total={totalPages}
                size="xs"
                page={currentPage}
                onChange={(page) => setCurrentPage(page)}
              />
            </Flex>
          </Box>
        </Box>
      </Box>
    </>
  );
}
