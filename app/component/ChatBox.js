import { Box, Image, Text, Avatar, Flex, Textarea, Button } from '@mantine/core';
import { IconSend2,IconFileUpload  } from '@tabler/icons-react';

const ChatBox = ({ selectedConversation }) => {
  return (
    <Box style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      {selectedConversation ? (
        <>
        
          <Box  py={18} style={{ height:84, borderBottom: '1px solid #ddd' }}>
            <Flex  ml={29} align="center">
              <Avatar src={selectedConversation.avatar} radius="xl" />
               <Box ml="md">
                <Text fw={600} mb={8} size="16px">{selectedConversation.name}</Text>
                <Text c="#999999" size="14px">1 minute ago</Text>
              </Box>
            </Flex>
          </Box>

          <Box pt={28} pl={28} style={{ flex: 1,  }}>
            <Box mb="sm">
              <Flex align="center">
                <Avatar src={selectedConversation.avatar} radius="xl" />
                <Box ml="md">
                  <Flex><Text mr={12} fw={600} size="14px">{selectedConversation.name}</Text>
                  <Text  fw={600} c="#999999" size="13px">Dec 29, 2022, 1:10 PM</Text></Flex>
                  <Text fw={400} size="14px" c="#999999" mt="10">Hi</Text>
                </Box>
              </Flex>
            </Box>
            <Box mt="md">
              <Flex align="center" justify="flex-end">
                <Box mr="md">
                    <Flex>
                    <Text fw={600} c="#999999" size="13px">Dec 29, 2022, 1:11 PM</Text>
                  <Text ml={12} fw={600} size="14px">Me</Text>
                  </Flex>
                  <Text pt={10} pl={130} fw={400} size="14px" c="#999999" mt="10">Hello!</Text>
                </Box>
                <Avatar mr={28} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbpj2gXrrEf1Tx8Bwb0nt4-Sf0VAm3jAyMYkyRcnuqa2mevRcpYwyadoKUxvNaiUrGF8Y&usqp=CAU" radius="xl" />
              </Flex>
            </Box>
          </Box>
          <Box style={{  padding: 20 }}>
            <Flex align="center">
              <Textarea
              rightSection={<IconSend2 stroke={2} />}
              leftSection={<IconFileUpload stroke={2}  />}
                placeholder="Write here..."
                autosize
                minRows={1}
                style={{ flex: 1, marginRight: 10 }}
              />
              
            </Flex>
          </Box>
        </>
      ) : (
        <Box ml="240px" my={239} style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
          <Image w={347} h={187} radius="md" src="/images/Frame.png" />
          <Box mt={20}>
            <Text fw={600} size="20px" align="center">Pick up where you left off</Text>
            <Text fw={600} color="#959EAD" mt={8} size="16px" align="center">Pick up where you left off</Text>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ChatBox;
