import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './home_screen';
import SettingsScreen from './settings_screen';
/*import RewardsScreen from './rewards_screen';*/

const Tab = createBottomTabNavigator();

const MainTabs = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name = "Home" component={HomeScreen}/>
            <Tab.Screen name = "Settings" component={SettingsScreen}/>
            {/*<Tab.Screen name = "Rewards" component={RewardsScreen}>*/}
        </Tab.Navigator>
    );
};

export default MainTabs