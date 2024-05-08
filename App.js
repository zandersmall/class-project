import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './LoginScreen';
import UserProfileScreen from './UserProfileScreen';
import CreateAccountScreen from './CreateAccountScreen';
import StatsScreen from './StatsScreen';
import ExerciseScreen from './ExerciseScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="UserProfile" component={UserProfileScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
        <Stack.Screen name="Stats" component={StatsScreen} />
        <Stack.Screen name="Exercise" component={ExerciseScreen} />
        {/* ... other routes */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;



