import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import Home from '../pages/Home';
import EditProfile from '../pages/EditProfile';

const AppRoutes = () => {
   return (
      <Navigator screenOptions={{ headerShown: false }}>
         <Screen name="Home" component={Home} />
         <Screen name="EditProfile" component={EditProfile} />
      </Navigator>
   );
};

export default AppRoutes;
