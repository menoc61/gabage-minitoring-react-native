import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OrdersScreen from "../screens/OrdersScreen";
import OrdersDeliveryScreen from "../screens/OrderDelivery";
import { HomeScreen } from '../screens';

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OrdersScreen" component={OrdersScreen} />
      <Stack.Screen
        name="OrdersDeliveryScreen"
        component={OrdersDeliveryScreen}
      />
    </Stack.Navigator>
  );
};
