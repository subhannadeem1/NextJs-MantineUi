import {
  TextInput,
  PasswordInput,
  Button,
  Group,
  Box,
  Text,
  Flex,
  Anchor,
  BackgroundImage
} from "@mantine/core";
import { IconBrandGoogle, IconBrandApple } from "@tabler/icons-react";



const login = () => {
  return (
    <BackgroundImage
      src="/images/Frame138.png" // Make sure to replace this with your actual image path
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }} // Adjust the size as needed
    >
      
        <Box 
          style={{
             
            display: "flex",
            
          
          height: 617,
          width: 1186,
            
          }}
        >
          {/* Left side: Form container */}
          <Box
            style={{
              width: 1186,
              
              padding: "60px 2rem 0rem 60px",
              borderRadius: "15px 0px 0px 15px",
              backgroundColor: "#ffffff",
              minWidth: "200px",
              // [mediaQueries.xs]: {
              //   flexDirection: "column",
              //   alignItems: "center",
              //   marginLeft: "0", // Adjust margin for smaller screens
              // },
            }}
          >
            <Text size="xl" fw={700}>
              Login
            </Text>
            <Text size="sm" style={{ 
              padding:"16px 0px 0px 0px"

               }} fw={400}>
              Please fill these information
            </Text>
            <form>
              <Flex gap="md" direction="column">
                <TextInput
                  label="Email"
                  placeholder="Enter your email"
                  radius="lg"
                  required
                  type="email"
                  style={{
                     maxWidth: 705,
                    padding:"40px 0px 0px 0px"
                    }}
                />
                <PasswordInput
                  label="Password"
                  placeholder="Enter your password"
                  radius="lg"
                  required
                  style={{ 
                    maxWidth: 705 ,
                  padding:"30px 0px 0px 0px"
                  }}
                />
                <Text size="sm"
                 weight={500}
                 style={{
                  padding:"0px 0px 0px 590px"
                 }}
                 >
                 
                  <Anchor href="/signup" fw={400}>
                    Forgot Password
                  </Anchor>
                </Text>

                <Group position="center" mt="md">
                  <Button
                    fullWidth
                    color="green"
                    radius="lg"
                    style={{ width: 705, height: 64 }}
                    type="submit"
                  >
                    Login
                  </Button>
                </Group>
                <Text size="sm" fw={400}
                style={{
                  padding:"10px 0px 0px 281px"
                }}
                >
                  Have not any account?{" "}
                  <Anchor href="/signup" fw={500}>
                    Creat now
                  </Anchor>
                </Text>
              </Flex>
            </form>
          </Box>

          {/* Right side: Social login container */}
          <Box
            style={{
              width: 361,
              height: 617,
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
                  margin: "196rem 64rem 196rem 64rem",
              }}
              >
            <Text size="sm" fw={400}  style={{ 
              padding:"0px 0px 28px 0px"
               }}>
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
                justifyContent: "center"
               
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
  );
};

export default login;
