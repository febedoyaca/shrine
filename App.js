import React from "react";
import { Input, Text, Center, NativeBaseProvider, Box } from "native-base"
import NativeBaseIcon from "./components/NativeBaseIcon";
import { Provider } from "react-redux";
import { Store } from "./redux/store";
import { useSelector, useDispatch } from "react-redux";
import { filterByName } from "./redux/actions";


export default function App() {

  return (
    <Provider store={Store}>
      <AppWrapper></AppWrapper>
    </Provider>
  );
}

function AppWrapper() {

  const filteredList = useSelector(state => state.userReducer); //Porque no sirve ponerle {}
  const dispatch = useDispatch();

  function testMap(){

   console.log(filteredList["text"]);
  //console.log(typeof filteredList)
  }


  /* */
  return (
          <NativeBaseProvider>
            <Center _dark={{ bg: "blueGray.900" }} _light={{ bg: "blueGray.50" }} px={4} flex={1}>
              <Input mx="3" placeholder="Input to use Redux" w={{ base: "75%",md: "25%"}} variant="rounded" onChangeText = {(value) => dispatch(filterByName(value))}></Input>
              <Text>{testMap()}</Text>
              <Box>{(filteredList["text"]).map((item, index) => (
                    <Text key={index}>{Object.values(item)[1]}</Text>
                    ))}
              </Box>
            </Center>
          </NativeBaseProvider>)
}

