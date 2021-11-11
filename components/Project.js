import React from 'react';
import { VStack, Box, Divider,  Flex, Spacer, Text } from 'native-base';

export default function Project({name = "", description = "", manager = "", techLead = "", endDate = 0}) {
 
    let objectEndDate = new Date(endDate);
    let completeDate = objectEndDate.getDay().toString() + "/" + objectEndDate.getMonth().toString() + "/" +  objectEndDate.getFullYear().toString();
    
    return (
    <Box border={1} borderRadius='md' shadow={3} w="328px" h="194px">
      <VStack>
        <Flex px={4} pt={6} pb={6} bg="#00AEEF" justifyContent= "center"  h="76px">
          <Text bold color="#FFFFFF" fontSize="18px">{name}</Text>
          <Text color="#FFFFFF" fontSize="16px">{description}</Text>
        </Flex>
        <Box px={4} bg="#FFFFFF" h="118px">
            <Flex justifyContent= "space-around">
                <Flex direction="row"  my="9px"> 
                    <Text bold>Manager: </Text>
                    <Text>{manager}</Text>
                </Flex>
                <Flex direction="row"  my="9px"> 
                    <Text bold>Tech Leader: </Text>
                    <Text>{techLead}</Text>
                </Flex>
                <Flex direction="row"  my="9px"> 
                    <Text bold>End Date: </Text>
                    <Text>{completeDate}</Text>
                </Flex>
            </Flex>
        </Box>
      </VStack>
    </Box>
  );
}