"use client";

import {  Box, Button, Flex, Group, Image, Radio, Select, Text, TextInput} from "@mantine/core";
import Header from "../component/header";
import { useState } from "react";
import { IconCamera } from "@tabler/icons-react";
import ChangePasswordModal from "../component/modal/ChangePasswordModal";

export default function EditProfile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = {
    image:
      "https://png.pngtree.com/element_our/png/20181102/avatar-profile-logo-vector-emblem-illustration-modern-illustration-png_227485.jpg",
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
                  />

                  <TextInput
                  mt={30}
                    label="Last Name"
                    placeholder="Enter your last name"
                    radius="lg"
                    required
                    style={{ width: 540 }}
                  />
                </Flex>
                <Flex gap="lg" mt={30}>
                <TextInput
                  
                    label="Email"
                    placeholder="Enter your email"
                    radius="lg"
                    required
                    
                    style={{ width: 540 }}
                  />
                  <TextInput
                  
                    label="Date of Birth"
                    placeholder="MM/DD/YYYY"
                    radius="lg"
                    required
                    type="date"
                    style={{ width: 540 }}
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
                  />
                   <Group mt={30} >
                  <Text size="sm" fw={500}>
                    Gender:
                  </Text>
                  <Radio value="male" label="Male" />
                  <Radio value="female" label="Female" />
                </Group>
                  </Flex>
                  <TextInput
                mt={30} mb={268}
                  label="Bio"
                  
                  radius="lg"
                  placeholder="Write here"
                  style={{ Width: 1080 }}
                />
          </Box>

        </Group>
        <ChangePasswordModal isOpen={isModalOpen} onClose={handleModalClose} />
      </Box>
    </>
  );
}
