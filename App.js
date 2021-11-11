import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Code,
} from "native-base";
import Project from "./components/Project";

// Define the config

export default function App() {

  let testEndDate = 1998430752739;
  return (
    <NativeBaseProvider>
      <Center _dark={{ bg: "blueGray.900" }} _light={{ bg: "blueGray.50" }} px={4} flex={1}>
        <VStack space={5} alignItems="center">
          <Project name = "Baptist Health South Florida, Inc" 
                    description = "BHSF Patient Mobile App"
                    manager = "Roberto Jose Duque Diaz" 
                    techLead = "Maximiliano Jose" 
                    endDate = {testEndDate}/>
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
}
