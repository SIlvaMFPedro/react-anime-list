import React, { useContext } from "react";
import { StatusBar, StyleSheet, View } from 'react-native';
import Context,{ AnimeContext } from "./API/context";
import Tabs from "./Components/Tabs";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  }
});


function App() {
  const { darkTheme } = useContext(AnimeContext);

  return (
    <View style={{ ...styles.container, backgroundColor: darkTheme ? "#282C35" : "white"}}>
      <Tabs/>
    </View>
  );
}

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <Context>
      <App/>
    </Context>
  );
};

