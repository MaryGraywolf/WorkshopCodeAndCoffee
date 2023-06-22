import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Navigator
    screenOptions={{
      headerShown: false,
      tabBarLabelPosition: "beside-icon",
      tabBarActiveTintColor: "#9333ea",
      tabBarInactiveTintColor: "#8D8D99",
      tabBarStyle: {
        position: 'absolute',
        height: 60,
        backgroundColor: '#202024',
      },
      tabBarItemStyle:{
        position: 'relative',
        top: Platform.OS === 'android' ? -10 : 0,
      }
    }}>
      <Screen
        name="login"
        component={Login}
        options={{
          tabBarButton: () => null,
          headerShown: false,
          tabBarStyle: {
            display: "none",
          },
        }}
      />
      <Screen
        name="register"
        component={Register}
        options={{
          tabBarButton: () => null,
          headerShown: false,
          tabBarStyle: {
            display: "none",
          },
        }}
      />
      <Screen
        name="home"
        initialParams={{ userId: '' }}
        component={Home}
        options={{
          tabBarLabel: "Home", 
        }}
      />
    </Navigator>
  );
}
