"use client";

import { useState } from "react";
import {
  Menu,
  UnstyledButton,
  Group,
  Avatar,
  Text,
  rem,
  Image,
  Box,
  Divider,
  NavLink,
  
} from "@mantine/core";
import {
  IconLogout,
  IconSwitchHorizontal,
  IconChevronDown,
  
} from "@tabler/icons-react";

export default function Header() {
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  const user = {
    name: "Subhan Nadeem",
    email: "Subhanch@gmail.com",
    image:
      "https://png.pngtree.com/element_our/png/20181102/avatar-profile-logo-vector-emblem-illustration-modern-illustration-png_227485.jpg",
  };
  
  

 
  return (
    <>
      <Box
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Box ml={160} mr={160}>
          <div className="flex  justify-between items-center p-4 ">
            {/* Left side: Logo and NavLinks */}
            <div className="flex items-center">
              <Image
                style={{
                  width: 69,
                  height: 20,
                }}
                src="/images/Logo.png"
                alt="Logo"
                mr={"82px"}
              />
              {/* className="mr-4 text-lg font-semibold text-green-600" */}
              <NavLink
                href="/"
                label="Home"
                mr={"20px"}
                style={{
                  width: 69,
                  height: 31,
                  border: "1px",
                  borderRadius: "6px",
                  backgroundColor: "#00AB46",
                  color: "#FFFFFF",
                  padding: "6px 12px 6px 12px",
                }}
              />
              <NavLink
                href="/message"
                label="Message"
                style={{
                  width: 93,
                  height: 31,
                  border: "1px",
                  borderRadius: "6px",
                  // backgroundColor:"#00AB46",
                  // color:"#FFFFFF",
                  padding: "6px 12px 6px 12px",
                }}
              />
            </div>

            {/* Right side: User Profile */}
            <Menu
              width={260}
              position="bottom-end"
              transitionProps={{ transition: "pop-top-right" }}
              onClose={() => setUserMenuOpened(false)}
              onOpen={() => setUserMenuOpened(true)}
              withinPortal
            >
              <Menu.Target>
                <UnstyledButton
                  className={`flex items-center ${
                    userMenuOpened ? "bg-gray-100" : ""
                  }`}
                >
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
                    <IconChevronDown
                      style={{ width: rem(12), height: rem(12) }}
                      stroke={1.5}
                    />
                  </Group>
                </UnstyledButton>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item
                  leftSection={
                    <IconSwitchHorizontal
                      style={{ width: rem(16), height: rem(16) }}
                      stroke={1.5}
                    />
                  }
                >
                  Edit Profile
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item
                  leftSection={
                    <IconLogout
                      style={{ width: rem(16), height: rem(16) }}
                      stroke={1.5}
                    />
                  }
                >
                  Logout
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </div>
        </Box>
<Divider my="sm" />



      
        </Box>
      
    </>
  );
}
