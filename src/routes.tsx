import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather as Icon } from "@expo/vector-icons";
import PayButton from "./components/PayButton";

import Home from "./pages/Home";
import Wallet from "./pages/Wallet";
import Pay from "./pages/Pay";

const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <Tab.Navigator
      initialRouteName="Wallet"
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          if (route.name === "Home") {
            return <Icon name="home" size={size} color={color} />;
          } else if (route.name === "Wallet") {
            return <Icon name="credit-card" size={size} color={color} />;
          } else if (route.name === "Pay") {
            return (
              <PayButton
                onPress={() => navigation.navigate("Pay")}
                focused={focused}
              />
            );
          } else if (route.name === "Notifications") {
            return <Icon name="bell" size={size} color={color} />;
          } else if (route.name === "Settings") {
            return <Icon name="settings" size={size} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: "#131418",
          borderTopColor: "rbga(255, 255, 255, 0.2)",
        },
        activeTintColor: "#fff",
        inactiveTintColor: "#92929c",
      }}
    >
      <Tab.Screen name="Home" component={Home} options={{ title: "Início" }} />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{ title: "Carteira" }}
      />
      <Tab.Screen name="Pay" component={Pay} options={{ title: "" }} />
      <Tab.Screen
        name="Notifications"
        component={Pay}
        options={{ title: "Notificações" }}
      />
      <Tab.Screen
        name="Settings"
        component={Pay}
        options={{ title: "Ajustes" }}
      />
    </Tab.Navigator>
  );
};

export default Routes;
