"use client"
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
import { useForm } from '@mantine/form';
import GoogleLoginButton from "../component/auth/GoogleLoginButton";
import AppleLoginButton from "../component/auth/AppleLoginButton";
const login = () => {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: ''
       
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  const handleGoogleLogin = () => {
    signIn('google');
  };

  const handleAppleLogin = () => {
    signIn('apple');
  };
  return (
    
    <BackgroundImage
      src="/images/Frame138.png" 
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }} 
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
              <form onSubmit={form.onSubmit((values) => console.log(values))}>
                <TextInput
                  label="Email"
                  placeholder="Enter your email"
                  radius="lg"
                  required
                  // type="email"
                  key={form.key('email')}
                    {...form.getInputProps('email')}
                  style={{
                     maxWidth: 705,
                    padding:"40px 0px 0px 0px"
                    }}
                    
                /></form>
                
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
          <Box
            style={{
              margin: "196rem 64rem 196rem 64rem",
            }}
          >
            <Text size="sm" fw={400} style={{ padding: "0px 0px 28px 0px" }}>
              Continue with:
            </Text>
            <GoogleLoginButton onClick={handleGoogleLogin} />
            <AppleLoginButton onClick={handleAppleLogin} />
          </Box>
        </Box>
        </Box>
      
    </BackgroundImage>
    
  );
};

export default login;
