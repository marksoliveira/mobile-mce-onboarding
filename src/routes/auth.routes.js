import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import Login from '../pages/Login';
import Register from '../pages/Register';
import ForgotPassword from '../pages/ForgotPassword';

const AuthRoutes = () => {
  return (
     <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Login" component={Login} />
        <Screen name="Register" component={Register} />
        <Screen name="ForgotPassword" component={ForgotPassword} />
     </Navigator>
  );
};

export default AuthRoutes;
