"use client"
import { useState } from 'react';
import { AppShell, Box, Flex, Paper } from '@mantine/core';
import Header from '../component/header';
import ChatBox from '../component/ChatBox';
import ChatList from '../component/ChatList';

const Message = () => {
  const [selectedConversation, setSelectedConversation] = useState(null);

  return (
    <>
      <Header />
      <Box radius="5px" mt={60} mx={160} mb={250}>
        <Paper style={{ height: 740, border: '1px solid #ddd' }}>
          <Flex>
            <Box style={{ height: 740, border: '1px solid #ddd' }}>
              <ChatList setSelectedConversation={setSelectedConversation} />
            </Box>
            <ChatBox selectedConversation={selectedConversation} />
          </Flex>
        </Paper>
      </Box>
    </>
  );
};

export default Message;
