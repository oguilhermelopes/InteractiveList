import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { List } from './src/screens/List';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <List />
    </GestureHandlerRootView>
  )
}