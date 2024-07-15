"use client";

import Header from "./component/header";
import { useState } from "react";
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
} from "@mantine/core";
import { IconSearch, IconTrash } from "@tabler/icons-react";
import DeleteModal from "./component/modal/DeleteModal";

export default function Home() {
  const user = {
    name: "Subhan Nadeem",
    email: "Subhanch@gmail.com",
    image:
      "https://png.pngtree.com/element_our/png/20181102/avatar-profile-logo-vector-emblem-illustration-modern-illustration-png_227485.jpg",
  };
  const [elements, setElements] = useState([
    {
      position: (
        <Group gap={7}>
          <Avatar
            src={user.image}
            alt={user.name}
            radius="xl"
            style={{
              width: 36,
              height: 36,
            }}
          />
          <div>
            <Text mb={5} fw={500} size="sm" lh={1} mr={3}>
              {user.name}
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
      ),
      
      LastActive: "31. Dec. 2022",
      Occupation: "Job",
      Status: "Not Active",
    },
    {
      position: (
        <Group gap={7}>
          <Avatar
            src={user.image}
            alt={user.name}
            radius="xl"
            style={{
              width: 36,
              height: 36,
            }}
          />
          <div>
            <Text mb={5} fw={500} size="sm" lh={1} mr={3}>
              {user.name}
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
      ),
      
      LastActive: "31. Dec. 2022",
      Occupation: "Business",
      Status: "Active",
    },
    {
      position: (
        <Group gap={7}>
          <Avatar
            src={user.image}
            alt={user.name}
            radius="xl"
            style={{
              width: 36,
              height: 36,
            }}
          />
          <div>
            <Text mb={5} fw={500} size="sm" lh={1} mr={3}>
              {user.name}
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
      ),
      
      LastActive: "31. Dec. 2022",
      Occupation: "Job",
      Status: "Not Active",
    },
    {
      position: (
        <Group gap={7}>
          <Avatar
            src={user.image}
            alt={user.name}
            radius="xl"
            style={{
              width: 36,
              height: 36,
            }}
          />
          <div>
            <Text mb={5} fw={500} size="sm" lh={1} mr={3}>
              {user.name}
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
      ),
      
      LastActive: "31. Dec. 2022",
      Occupation: "Business",
      Status: "Active",
    },
    {
      position: (
        <Group gap={7}>
          <Avatar
            src={user.image}
            alt={user.name}
            radius="xl"
            style={{
              width: 36,
              height: 36,
            }}
          />
          <div>
            <Text mb={5} fw={500} size="sm" lh={1} mr={3}>
              {user.name}
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
      ),
     
      LastActive: "31. Dec. 2022",
      Occupation: "Job",
      Status: "Not Active",
    },
    {
      position: (
        <Group gap={7}>
          <Avatar
            src={user.image}
            alt={user.name}
            radius="xl"
            style={{
              width: 36,
              height: 36,
            }}
          />
          <div>
            <Text mb={5} fw={500} size="sm" lh={1} mr={3}>
              {user.name}
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
      ),
      
      LastActive: "31. Dec. 2022",
      Occupation: "Business",
      Status: "Active",
    },
    {
      position: (
        <Group gap={7}>
          <Avatar
            src={user.image}
            alt={user.name}
            radius="xl"
            style={{
              width: 36,
              height: 36,
            }}
          />
          <div>
            <Text mb={5} fw={500} size="sm" lh={1} mr={3}>
              {user.name}
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
      ),
      
      LastActive: "31. Dec. 2022",
      Occupation: "Job",
      Status: "Not Active",
    },
    {
      position: (
        <Group gap={7}>
          <Avatar
            src={user.image}
            alt={user.name}
            radius="xl"
            style={{
              width: 36,
              height: 36,
            }}
          />
          <div>
            <Text mb={5} fw={500} size="sm" lh={1} mr={3}>
              {user.name}
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
      ),
      
      LastActive: "31. Dec. 2022",
      Occupation: "Business",
      Status: "Active",
    },
    {
      position: (
        <Group gap={7}>
          <Avatar
            src={user.image}
            alt={user.name}
            radius="xl"
            style={{
              width: 36,
              height: 36,
            }}
          />
          <div>
            <Text mb={5} fw={500} size="sm" lh={1} mr={3}>
              {user.name}
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
      ),
      
      LastActive: "31. Dec. 2022",
      Occupation: "Job",
      Status: "Not Active",
    },
  ]);
  const [search, setSearch] = useState('');
  const [selectedRows, setSelectedRows] = useState([]);
  const [showCheckboxes, setShowCheckboxes] = useState(false);
  // const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [showModal, setShowModal] = useState(false);


  const handleDelete = () => {
    const newElements = elements.filter(
      (_, index) => !selectedRows.includes(index)
    );
    setElements(newElements);
    setSelectedRows([]);
    setShowCheckboxes(false);
    setShowModal(false);
  };

  const handleTrashClick = () => {
    setShowCheckboxes(!showCheckboxes);
  };
  const handleSelectAll = (event) => {
    const checked = event.currentTarget.checked;
    setSelectAllChecked(checked);
    if (checked) {
      setSelectedRows(elements.map((_, index) => index));
    } else {
      setSelectedRows([]);
    }
  };

const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

 const filteredElements = elements.filter((element) =>
    element.position.props.children[1].props.children[0].props.children
      .toLowerCase()
      .includes(search.toLowerCase()) ||
    element.position.props.children[1].props.children[1].props.children
      .toLowerCase()
      .includes(search.toLowerCase()) ||
    element.Occupation.toLowerCase().includes(search.toLowerCase()) ||
    element.LastActive.toLowerCase().includes(search.toLowerCase()) ||
    element.Status.toLowerCase().includes(search.toLowerCase())
  );

  const rows = filteredElements.map((element, index) => (
    <Table.Tr
      key={index}
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
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.Occupation}</Table.Td>
      <Table.Td>{element.LastActive}</Table.Td>
      <Table.Td>{element.Status}</Table.Td>
      <Table.Td>
        {showCheckboxes ? (
          <Button
            variant="filled"
            color="#00AB46"
            radius="lg"
            onClick={() => setShowModal(true)}
          >
            Delete
          </Button>
        ) : (
          <Button variant="filled" color="#00AB46" radius="lg">
            Message
          </Button>
        )}
        <DeleteModal isOpen={showModal} onClose={() => setShowModal(false)} onDelete={handleDelete} />
      </Table.Td>
    </Table.Tr>
  ));

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
              // mt="40px"
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
              // width:1600,
              height: "77px",
            }}
          >
            <Table.Thead>
              <Table.Tr>
              {showCheckboxes && <Table.Th />}
                <Table.Th>Name of users</Table.Th>
                <Table.Th>Occupation</Table.Th>
                <Table.Th>Last Active</Table.Th>
                <Table.Th>Status</Table.Th>
                <Table.Th>Action</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
          <Box>
            <Flex mt={30} mb={50} ml={"90%"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-square-arrow-left"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#00AB46"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 8l-4 4l4 4" />
                <path d="M16 12h-8" />
                <path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-square-rounded-number-1"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#999999"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 10l2 -2v8" />
                <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-square-rounded-number-2"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#00AB46"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 8h3a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3" />
                <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-square-arrow-right"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#00AB46"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 16l4 -4l-4 -4" />
                <path d="M8 12h8" />
                <path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
              </svg>
            </Flex>
          </Box>
        </Box>
      </Box>
      
    </>
  );
}
