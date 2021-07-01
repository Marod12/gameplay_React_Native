import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { Signin } from '../screens/Signin';
import { AppointmentDetails } from '../screens/AppointmentDetails';
import { AppointmentCreate } from '../screens/AppointmentCreate';

const { Navigator, Screen } = createStackNavigator();
import { theme } from '../global/theme';

export function AuthRoutes() {
    return (
        <Navigator
            headerMode="none"
            screenOptions={{ 
                cardStyle: {
                    backgroundColor: theme.colors.secondary100
                }
            }}
        >
            <Screen 
                name="SignIn"
                component={Signin}
            />
            <Screen 
                name="Home"
                component={Home}
            />
            <Screen 
                name="AppointmentDetails"
                component={AppointmentDetails}
            />
            <Screen 
                name="AppointmentCreate"
                component={AppointmentCreate}
            />
        </Navigator>
    )
}