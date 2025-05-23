import React, { useEffect, useState } from 'react'
import i18n from 'i18n-js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import SubscriptionScreen from '../screens/PayScreen';
import ChatScreen from '../screens/ChatScreen';
import ConfigurationScreen from '../screens/ConfigurationScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, View } from 'react-native';
import OpenBrowserScreen from '../screens/OpenBrowserScreen/OpenBrowserScreen';
import ModelsScreen from '../screens/ModelsScreen';

const Router = () => {
    const Stack = createNativeStackNavigator()
    const [chooseScreen, setChooseScreen] = useState("");


    const isNewUser = async () => {
        const newUser = await AsyncStorage.getItem("WelcomeScreen")
        setChooseScreen(newUser === 'Visit' ? "Chat" : "Welcome")
    }

    useEffect(() => {
        isNewUser()
    }, [])

    if (!chooseScreen) {
        return (
            <View>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    } else {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName={chooseScreen}>
                    <Stack.Screen
                        name="Welcome"
                        component={WelcomeScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Subscription"
                        component={SubscriptionScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Configuration"
                        component={ConfigurationScreen}
                        options={{
                            title: `${i18n.t('settings')}`,
                            headerTintColor: 'white',
                            headerStyle: { backgroundColor: '#1C1C1E' },
                            headerShadowVisible: false,
                            headerTitleStyle: { fontWeight: 'bold', fontSize: 20 },
                            animation: "fade_from_bottom"
                        }}
                    />
                    <Stack.Screen
                        name="Chat"
                        component={ChatScreen}
                        options={{
                            title: '',
                            headerTintColor: 'black',
                            headerStyle: { backgroundColor: '#0A0A0A' },
                            headerShadowVisible: false
                        }}
                    />
                    <Stack.Screen
                        name="Models"
                        component={ModelsScreen}
                        options={{
                            title: `${i18n.t('models')}`,
                            headerTintColor: 'white',
                            headerStyle: { backgroundColor: '#1C1C1E' },
                            headerShadowVisible: false,
                            presentation:"modal"
                        }}
                    />
                    <Stack.Screen
                        name="OpenBrowser"
                        component={OpenBrowserScreen}
                        options={{
                            title: ``,
                            headerTitleStyle: { fontFamily: "Poppins_700Bold", fontSize: 16 },
                            headerTintColor: 'white',
                            headerStyle: { backgroundColor: '#0A0A0A' },
                            headerShadowVisible: false
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default Router
