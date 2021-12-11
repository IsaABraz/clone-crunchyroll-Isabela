import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import Conta from "./pages/Conta";
import Listas from "./pages/Listas";
import Simulcats from "./pages/Simulcats";
import {SimpleLineIcons, Feather, Fontisto, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Routes(){
    return (

        <Tab.Navigator
            
            screenOptions={{
            tabBarInactiveBackgroundColor: "#2F4F4F" ,
            tabBarActiveBackgroundColor: "#2F4F4F",
        
        tabBarStyle:{
            backgroundColor:"black",
            borderTopColor:"transparent"
        }
    }}
        >
            <Tab.Screen 
            name="Início" 
            component={Home} 
            options={{
                headerShown: false,
                tabBarIcon: ()=> (
                    <SimpleLineIcons 
                    name="home" 
                    size={24} 
                    color="#FFA500" />
                )}}
            />

            <Tab.Screen 
            name="Listas" 
            component={Listas}
            options={{
                headerShown: false,
                tabBarIcon: ()=> (
                    <Fontisto 
                    name="bookmark" 
                    size={24}
                    color="#fff" />
                )}}/>

            <Tab.Screen
            name="Catalogo" 
            component={Catalogo}
            options={{
                headerShown: false,
              tabBarIcon: ()=> (
                 <Feather 
                 name="grid" 
                 size={20} 
                 color="#fff" />
            )}}
            />

            <Tab.Screen 
            name="Simulcats" 
            component={Simulcats}
            options={{
                headerShown: false, 
                tabBarIcon: ()=> (
                    <MaterialCommunityIcons 
                    name="star-four-points-outline" 
                    size={24} 
                    color="#fff" />
                 )
            }}/>

            <Tab.Screen 
            name="Conta" component={Conta}  
            options={{
                headerShown: false,
                  tabBarIcon: ()=> (
                    <FontAwesome 
                    name="user-o" 
                    size={24} 
                    color="#fff" />
             )
            }}/>
        </Tab.Navigator>
    )

}