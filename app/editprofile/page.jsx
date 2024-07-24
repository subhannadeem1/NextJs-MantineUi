"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  Group,
  Image,
  Radio,
  Select,
  Text,
  TextInput,
  RadioGroup,
} from "@mantine/core";
import Header from "../component/header";
import { IconCamera } from "@tabler/icons-react";
import ChangePasswordModal from "../component/modal/ChangePasswordModal";
import { updateUserData, fetchUserData  } from "../api/user";

export default function EditProfile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dateOfBirth: "",
    occupation: "",
    gender: "",
    bio: "",
    image: "https://png.pngtree.com/element_our/png/20181102/avatar-profile-logo-vector-emblem-illustration-modern-illustration-png_227485.jpg",
  });
  const userId = localStorage.getItem("userId"); // Get the user ID from localStorage
  const [isUpdating, setIsUpdating] = useState(false);
  
  useEffect(() => {
    const loadUserData = async () => {
      if (userId) {
        const userData = await fetchUserData(userId);
        if (userData) {
          setUser({
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            dateOfBirth: userData.dateOfBirth,
            occupation: userData.occupation,
            gender: userData.gender,
            bio: userData.bio,
            image: userData.image || user.image,
          });
        }
      }
    };

    loadUserData();
  }, [userId]);

  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSelectChange = (name, value) => {
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleEdit = async () => {
    if (userId) {
      setIsUpdating(true);
      const updated = await updateUserData(userId, {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        dateOfBirth: user.dateOfBirth,
        occupation: user.occupation,
        gender: user.gender,
        bio: user.bio,
        // image: user.image, // Uncomment if image upload is implemented
      });

      if (updated) {
        console.log("User data updated successfully");
      } else {
        console.error("Error updating user data");
      }
      setIsUpdating(false);
    }
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Header />
      <Box mt={80} ml={160} mr={160}>
        <Group
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px", // 4 in Tailwind corresponds to 16px
          }}
        >
          <Box
            style={{
              width: "102px",
              height: "102px",
              position: "relative",
            }}
          >
            <Image
              src={user.image}
              radius="100%"
              width={102}
              height={102}
              fit="cover"
              style={{
                borderRadius: "50%",
                overflow: "hidden",
              }}
            />
            <Box
              style={{
                position: "absolute",
                bottom: "5px",
                right: "5px",
                width: "44px",
                height: "44px",
                backgroundColor: "white",
                borderRadius: "50%",
                padding: "3px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IconCamera size={16} color="black" />
            </Box>
          </Box>
          <Box>
            <Button
              onClick={handleModalOpen}
              px={36}
              py={19}
              mr={19}
              variant="filled"
              color="#DDDDDD"
              radius="lg"
              style={{ height: 60 }}
            >
              Change Password
            </Button>
            <Button
              onClick={handleEdit}
              px={36}
              py={19}
              variant="filled"
              color="#00AB46"
              radius="lg"
              style={{ height: 60 }}
            >
              Edit
            </Button>
          </Box>
        </Group>
        <Group>
          <Box>
            <Flex gap="lg" mt={48}>
              <TextInput
                mt={30}
                label="First Name"
                placeholder="Enter your first name"
                radius="lg"
                required
                style={{ width: 540 }}
                name="firstName"
                value={user.firstName}
                onChange={handleInputChange}
              />
              <TextInput
                mt={30}
                label="Last Name"
                placeholder="Enter your last name"
                radius="lg"
                required
                style={{ width: 540 }}
                name="lastName"
                value={user.lastName}
                onChange={handleInputChange}
              />
            </Flex>
            <Flex gap="lg" mt={30}>
              <TextInput
                label="Email"
                placeholder="Enter your email"
                radius="lg"
                required
                style={{ width: 540 }}
                name="email"
                value={user.email}
                onChange={handleInputChange}
              />
              <TextInput
                label="Date of Birth"
                placeholder="MM/DD/YYYY"
                radius="lg"
                required
                type="date"
                style={{ width: 540 }}
                name="dateOfBirth"
                value={user.dateOfBirth}
                onChange={handleInputChange}
              />
            </Flex>
            <Flex gap="lg" mt={30}>
              <Select
                label="Occupation"
                radius="lg"
                placeholder="Job"
                data={["React", "Angular", "Vue", "Svelte"]}
                searchable
                nothingFoundMessage="Nothing found..."
                style={{ width: 540 }}
                name="occupation"
                value={user.occupation}
                onChange={(value) => handleSelectChange("occupation", value)}
              />
              <Flex>
              <Text size="sm" ml={20} fw={500}>
                    Gender:
                  </Text>
              <RadioGroup
                
                required
                value={user.gender}
                onChange={(value) => handleSelectChange("gender", value)}
                style={{ width: 540 }}
              >
                <Flex>
                <Radio value="male" label="Male" />
                <Radio value="female" label="Female" /></Flex>
              </RadioGroup>
              </Flex>
            </Flex>
            <TextInput
              mt={30}
              mb={268}
              label="Bio"
              radius="lg"
              placeholder="Write here"
              style={{ width: 1080 }}
              name="bio"
              value={user.bio}
              onChange={handleInputChange}
            />
          </Box>
        </Group>
        <ChangePasswordModal isOpen={isModalOpen} onClose={handleModalClose} />
      </Box>
    </>
  );
}
