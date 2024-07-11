import {
  TextInput,
  PasswordInput,
  Button,
  Group,
  Box,
  Text,
  Flex,
  Radio,
  Select,
  Anchor,
  BackgroundImage
} from "@mantine/core";

import { IconBrandGoogle, IconBrandApple } from "@tabler/icons-react";



const signup = () => {
  return (
    <>
    <BackgroundImage
      src="/images/Frame138.png" // Make sure to replace this with your actual image path
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }} // Adjust the size as needed
    >
     
      
        <Box my={120}
          style={{
            display: "flex",
            width: 1186,
            height:"100%",
            
            
          }}
        >
          {/* Left side: Form container */}
          <Box
            style={{
              padding: "60px 60px 60px 60px",
              borderRadius: "15px 0px 0px 15px",
              backgroundColor: "#ffffff",
              
              
            }}
          >
            <Text size="xl" fw={700}>
              Sign Up
            </Text>
            <Text size="sm" mt={16}  fw={500}>
              Please fill these information
            </Text>
            <form>
              <Flex gap="md" direction="column">
                <Flex gap="md">
                  <TextInput
                  mt={30}
                    label="First Name"
                    placeholder="Enter your first name"
                    radius="lg"
                    required
                    style={{ width: 345 }}
                  />

                  <TextInput
                  mt={30}
                    label="Last Name"
                    placeholder="Enter your last name"
                    radius="lg"
                    required
                    style={{ width: 345 }}
                  />
                </Flex>
                <TextInput
                
                pt={30}
                  label="Email"
                  placeholder="Enter your email"
                  radius="lg"
                  required
                  type="email"
                  style={{ maxWidth: 705 }}
                />
                <PasswordInput
                pt={30}
                  label="Password"
                  placeholder="Enter your password"
                  radius="lg"
                  required
                  style={{ maxWidth: 705 }}
                />
                <Flex gap="md">
                  <TextInput
                  mt={30}
                    label="Date of Birth"
                    placeholder="MM/DD/YYYY"
                    radius="lg"
                    required
                    type="date"
                    style={{ width: 345 }}
                  />

                  <Select
                  mt={30}
                    label="Occupation"
                    radius="lg"
                    placeholder="Job"
                    data={["React", "Angular", "Vue", "Svelte"]}
                    searchable
                    nothingFoundMessage="Nothing found..."
                    style={{ width: 345 }}
                  />
                </Flex>
                <TextInput
                mt={30}
                  label="Bio"
                  radius="lg"
                  placeholder="Write here"
                  style={{ maxWidth: 705 }}
                />
                <Group mt={30}>
                  <Text size="sm" fw={500}>
                    Gender:
                  </Text>
                  <Radio value="male" label="Male" />
                  <Radio value="female" label="Female" />
                </Group>
                <Group position="center" mt="md">
                  <Button
                    fullWidth
                    color="green"
                    radius="lg"
                    style={{ width: 705, height:60}}
                    type="submit"
                  >
                    Sign up
                  </Button>
                </Group>
                <Text size="sm" ml={271} mt={30}  weight={500}>
                  Already have an account?{" "}
                  <Anchor href="/login" weight={500}>
                    Login
                  </Anchor>
                </Text>
              </Flex>
            </form>
          </Box>

          {/* Right side: Social login container */}
          <Box
            style={{
              width: 361,
              
              borderRadius: "0px 15px 15px 0px",
              backgroundColor: "#F9F5F2",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <box
              style={{
                  margin: "393px 64px 393px 64px",
              }}>
            <Text size="sm"  pb={28} fw={400}>
              Continue with:
            </Text>
            <Button
              variant="default"
              color="gray"
              style={{
                width: 200,
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IconBrandGoogle style={{ marginRight: 10 }} />
              Google
            </Button>
            <Button
              variant="default"
              color="gray"
              style={{
                width: 200,
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 20
              }}
            >
              <IconBrandApple style={{ marginRight: 10 }} />
              Apple ID
            </Button>
            </box>
          </Box>
        </Box>
      
      </BackgroundImage>
    </>
  );
};

export default signup;
