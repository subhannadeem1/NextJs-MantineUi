import { Modal, Button, Group, Text, Box, Paper } from '@mantine/core';
import { IconQuestionMark } from '@tabler/icons-react';

const DeleteModal = ({ isOpen, onClose, onDelete, user }) => {
  return (
    <Modal
      opened={isOpen}
      onClose={onClose}
      size="825px"
      centered
      padding="lg"
      radius={15}
    >
      <Paper>
        <Box>
          <Box position="center" ml={"382px"}>
            <IconQuestionMark stroke={2} />
          </Box>
          <Text size="xl" fw={700} pt={"30px"} weight={500} align="center">
            Confirm
          </Text>
          <Text align="center" fw={400} pt={"16px"}>
            Are you sure you want to delete {user ? `${user.firstName} ${user.lastName}` : 'this user'}?
          </Text>
          <Group position="center" pt={"40px"} spacing="lg">
            <Button
              variant="outline"
              color="green"
              onClick={onClose}
              mb={"60px"}
              ml={"40px"}
              style={{ width: 345, height: 60, borderRadius: "15px" }}
            >
              No
            </Button>
            <Button
  color="green"
  onClick={() => {
    if (user) {
      onDelete(user); // Ensure `user` is passed correctly
    }
  }}
  mb={"60px"}
  style={{ width: 345, height: 60, borderRadius: "15px" }}
>
  Yes
</Button>
          </Group>
        </Box>
      </Paper>
    </Modal>
  );
};

export default DeleteModal;
