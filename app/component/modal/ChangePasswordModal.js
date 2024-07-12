// components/ChangePasswordModal.js
import { useState } from "react";
import { Modal, Paper, TextInput, Button, Text, Flex } from "@mantine/core";

export default function ChangePasswordModal({ isOpen, onClose }) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSavePassword = () => {
    
    console.log("Saving password...");
    // Close the modal after saving
    onClose();
  };

  return (
    <Modal opened={isOpen} onClose={onClose} radius={15} size="825">
      <Paper  padding="lg" ml={60} mr={60}  mb={60} style={{  }}>
        <Text  fw={700} size="32px" style={{ }}>
          Change Password
        </Text>
        <Text  fw={400} mt={16} size="16px" style={{ marginBottom: 20 }}>
          Enter your password
        </Text>

        <TextInput
        mt={40}
          label="Current Password" 
          placeholder="Enter current password"
          type="password"
           radius="lg"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          style={{  width:700 }}
        />
        <TextInput
        mt={30}
          label="New Password"
          placeholder="Enter new password"
          type="password"
           radius="lg"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          style={{ marginBottom: 10, width:700 }}
        />
        <TextInput
        mt={30}
          label="Confirm New Password"
          placeholder="Confirm new password"
          type="password"
           radius="lg"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={{ marginBottom: 20, width:700 }}
        />
        
          
          <Button w={705} h={60} mt={30} radius="lg" variant="filled" color="#00AB46" onClick={handleSavePassword}>
            Update
          </Button>
        
      </Paper>
    </Modal>
  );
}
