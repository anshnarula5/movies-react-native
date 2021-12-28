import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import Main from "./components/Main";
import Details from "./components/Details";
import Navbar from "./components/Navbar";
import store from "./store";
import List from "./components/List";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar animated={true} barStyle="light-content" hidden={false} />
      <NavigationContainer>
        <View style={styles.container}>
          <Stack.Navigator
            initialRouteName="Main"
            screenOptions={{
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
          >
            <Stack.Screen
              name="Main"
              component={Main}
              options={{
                title: "Home",
                headerStyle: {
                  backgroundColor: "#161616",
                  shadowOffset: 1,
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontWeight: "bold",
                },
                animationEnabled: true,
              }}
            />
            <Stack.Screen
              name="List"
              component={List}
              options={{
                title: "Home",
                gestureDirection: "horizontal",
                headerStyle: {
                  backgroundColor: "#161616",
                  shadowOffset: 1,
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontWeight: "bold",
                },
                animationEnabled: true,
              }}
            />
            <Stack.Screen
              name="Details"
              component={Details}
              options={{
                title: "Movie Info",
                gestureDirection: "horizontal",
                headerStyle: {
                  backgroundColor: "#161616",
                  shadowOffset: 1,
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              }}
            />
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
