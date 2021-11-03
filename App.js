import React from "react";
import { Input, Text, Center, NativeBaseProvider } from "native-base"
import NativeBaseIcon from "./components/NativeBaseIcon";
import { Provider } from "react-redux";
import { Store } from "./redux/store";
import { useSelector, useDispatch } from "react-redux";
import { updateText } from "./redux/actions";


export default function App() {

  return (
    <Provider store={Store}>
      <AppWrapper></AppWrapper>
    </Provider>
  );
}

function AppWrapper() {

  const {text} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  return (
          <NativeBaseProvider>
            <Center _dark={{ bg: "blueGray.900" }} _light={{ bg: "blueGray.50" }} px={4} flex={1}>
              <Input mx="3" placeholder="Input to use Redux" w={{ base: "75%",md: "25%"}} variant="rounded" onChangeText = {(value) => dispatch(updateText(value))}></Input>
              <Text>{text}</Text>
            </Center>
          </NativeBaseProvider>)
}

