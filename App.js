import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import Main from "./components/Main";
import Details from "./components/Details";
import Navbar from "./components/Navbar";
import store from "./store";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
       <StatusBar
        animated={true}
        barStyle="light-content"     
        hidden={false} />
      <NavigationContainer>
        <View style={styles.container}>
          <Stack.Navigator initialRouteName="Main">
            <Stack.Screen
              name="Main"
              component={Main}
              options={{
                title: "Home",
                headerStyle: {
                  backgroundColor: "#161616",
                  shadowOffset : 1
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              }}
            />
            <Stack.Screen name="Details" component={Details} />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
    backgroundColor: "black",
  },
});
