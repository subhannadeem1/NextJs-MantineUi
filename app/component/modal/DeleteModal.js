import { Modal, Button, Group, Text, Box } from '@mantine/core';
import { IconQuestionMark } from '@tabler/icons-react';

const DeleteModal = ({ isOpen, onClose, onDelete }) => {
  return (
    <Modal
      opened={isOpen}
      onClose={onClose}
      size="825px" 
      centered
      
      padding="lg"
      styles={{
        root: {
          borderRadius: 15, // Adjust border radius as needed
          backgroundColor: 'transparent', // Make modal background transparent
          boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.1)', // Add box shadow for depth
        },
        body: {
          backgroundColor: 'white', // Ensure modal content has a white background
          borderRadius: 15, // Match border radius to root for consistency
        },
      }}
    >
      <Box >
        <Box position="center" ml={"382px"}>
          <IconQuestionMark stroke={2} />
        </Box>
        <Text size="xl" fw={700} pt={"30px"} weight={500} align="center">
          Confirm
        </Text>
        <Text align="center" fw={400} pt={"16px"}>
          Are you sure you want to delete Subhan Nadeem?
        </Text>
        <Group position="center" pt={"40px"} spacing="lg">
          <Button
            variant="outline"
            color="green"
            onClick={onClose}
            mb={"60px"} ml={"40px"}
            style={{ width: 345, height: 60, borderRadius: "15px"}} // Adjust width and height here
          >
            No
          </Button>
          <Button
            color="green"
            onClick={onDelete} mb={"60px"} 
            style={{ width: 345, height: 60, borderRadius: "15px" }} // Adjust width and height here
          >
            Yes
          </Button>
        </Group>
      </Box>
    </Modal>
  );
};

export default DeleteModal;
