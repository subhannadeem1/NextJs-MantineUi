
import { Box, Avatar, Text, ScrollArea, Paper, Flex } from '@mantine/core';
import { IconSearch, IconStar } from '@tabler/icons-react';

const ChatList = ({ setSelectedConversation }) => {
  const conversations = [
    // Your conversations array
    { name: 'Subhan CH', message: 'Lorem ipsum', avatar:       "https://png.pngtree.com/element_our/png/20181102/avatar-profile-logo-vector-emblem-illustration-modern-illustration-png_227485.jpg",
    },
       { name: 'Ali ali', message: 'Lorem ipsum', avatar:       "https://cdn.iconscout.com/icon/premium/png-256-thumb/profile-pic-3593260-3001251.png",
    },
       { name: 'umar khan', message: 'Lorem ipsum', avatar:       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbpj2gXrrEf1Tx8Bwb0nt4-Sf0VAm3jAyMYkyRcnuqa2mevRcpYwyadoKUxvNaiUrGF8Y&usqp=CAU",
    },
    { name: 'Subhan CH', message: 'Lorem ipsum', avatar:       "https://png.pngtree.com/element_our/png/20181102/avatar-profile-logo-vector-emblem-illustration-modern-illustration-png_227485.jpg",
    },
    { name: 'Subhan CH', message: 'Lorem ipsum', avatar:       "https://png.pngtree.com/element_our/png/20181102/avatar-profile-logo-vector-emblem-illustration-modern-illustration-png_227485.jpg",
    },
  ];

  return (
    <ScrollArea style={{ height: '100%' }}>
      <Box>
        <Flex style={{ borderBottom: '1px solid #ddd' }}>
          <Text fw={600} size="16px" mx={29} my={29}>All Conversations</Text>
          <Box ml={96} my={29}><IconSearch stroke={2} /></Box>
        </Flex>

        {conversations.map((convo, index) => (
          <Paper key={index} py={20} px={28} style={{ display: 'flex', alignItems: 'center', height: 98, width: 340, borderBottom: '1px solid #ddd' }} onClick={() => setSelectedConversation(convo)}>
            <Avatar src={convo.avatar} radius="xl" />
            <Flex>
              <Box ml="md">
                <Text mb={10} fw={600} size="16px">{convo.name}</Text>
                <Text c={"#959EAD"} fw={400} size="14px">{convo.message}</Text>
              </Box>
              <Box ml={43}>
                <Flex gap="sm">
                  <Text c={"#959EAD"} fw={400} size="14px">1 minute</Text>
                  <IconStar stroke={2} size={16} color="#FFA500" />
                </Flex>
              </Box>
            </Flex>
          </Paper>
        ))}
      </Box>
    </ScrollArea>
  );
};

export default ChatList;
