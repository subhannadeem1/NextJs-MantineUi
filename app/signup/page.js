"use client"
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
  BackgroundImage,
  Notification
} from "@mantine/core";

import GoogleLoginButton from "../component/auth/GoogleLoginButton";
import { useForm } from '@mantine/form';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const signup = () => {
  const router = useRouter();
  const [showNotification, setShowNotification] = useState(false);

  const form = useForm({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      dateOfBirth: '',
      occupation: '',
      bio: '',
      gender: '',
    },
    validate: {
      firstName: (value) => (value ? null : 'First name is required'),
      lastName: (value) => (value ? null : 'Last name is required'),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value.length >= 6 ? null : 'Password must be at least 6 characters long'),
      dateOfBirth: (value) => (value ? null : 'Date of birth is required'),
      occupation: (value) => (value ? null : 'Occupation is required'),
      bio: (value) => (value ? null : 'Bio is required'),
      gender: (value) => (['male', 'female', 'other'].includes(value) ? null : 'Invalid gender'),
    },
  });

  const handleGoogleLogin = () => {
    signIn('google');
  };

  const handleAppleLogin = () => {
    signIn('apple');
  };
  const handleSignupClick = () => {
    setShowNotification(true);
    setTimeout(() => {
      router.push('/login');
    }, 2000); // 2 seconds delay before navigating to the signup page
  };
  return (
    <>
    <BackgroundImage
      src="/images/Frame138.png" // Make sure to replace this with your actual image path
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
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
            <form onSubmit={form.onSubmit((values) => handleSignupClick())}>
              <Flex gap="md" direction="column">
                <Flex gap="md">
                  <TextInput
                  mt={30}
                    label="First Name"
                    placeholder="Enter your first name"
                    radius="lg"
                    required
                    style={{ width: 345 }}
                    value={form.values.firstName}
                    onChange={(event) => form.setFieldValue('firstName', event.currentTarget.value)}
                    error={form.errors.firstName}
                  />

                  <TextInput
                  mt={30}
                    label="Last Name"
                    placeholder="Enter your last name"
                    radius="lg"
                    required
                    style={{ width: 345 }}
                    value={form.values.lastName}
                    onChange={(event) => form.setFieldValue('lastName', event.currentTarget.value)}
                    error={form.errors.lastName}
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
                  value={form.values.email}
                  onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                  error={form.errors.email}
                />
                <PasswordInput
                pt={30}
                  label="Password"
                  placeholder="Enter your password"
                  radius="lg"
                  required
                  style={{ maxWidth: 705 }}
                  value={form.values.password}
                  onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                  error={form.errors.password}
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
                    value={form.values.dateOfBirth}
                    onChange={(event) => form.setFieldValue('dateOfBirth', event.currentTarget.value)}
                    error={form.errors.dateOfBirth}
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
                    value={form.values.occupation}
                    onChange={(value) => form.setFieldValue('occupation', value)}
                    error={form.errors.occupation}
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
                    type="button"
                    onClick={handleSignupClick}
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
            <GoogleLoginButton onClick={handleGoogleLogin} />
            {/* <AppleLoginButton onClick={handleAppleLogin} /> */}
            </box>
          </Box>
        </Box>
        {showNotification && (
        <Box
          style={{
            position: 'absolute',
            top: 0,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            zIndex: 1000, // Ensure it appears above other content
          }}
        >
          <Notification
            title="We notify you that"
            onClose={() => setShowNotification(false)}
          >
            your login successfully
          </Notification>
        </Box>
      )}
      </BackgroundImage>
    </>
  );
};

export default signup;
