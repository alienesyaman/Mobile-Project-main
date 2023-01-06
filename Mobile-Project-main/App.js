
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View ,LogBox} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import HomeScreen from './Film';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UpcomingScreen from './Upcoming';
import Detail from './Detail';
import { color } from 'react-native-reanimated';

LogBox.ignoreAllLogs();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Film" component={HomeScreen} />
      <Tab.Screen name="Upcoming" component={UpcomingScreen} />
    </Tab.Navigator>
  )
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    color:"red" ,
  },
})