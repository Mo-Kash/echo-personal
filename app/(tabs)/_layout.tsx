import { icons } from '@/constants/icons'
import { PlatformPressable } from '@react-navigation/elements'
import { Tabs } from 'expo-router'
import React from 'react'
import { Image, View } from 'react-native'

const TabIcon = ({tabName, iconSrc, focused}:any)=>{
    if(focused){
        return(
            <View className="size-full justify-center items-center rounded-full mt-4 bg-yel-200 p-5 overflow-hidden">
                <Image source={iconSrc} tintColor="#00000" className="size-5"/>
            </View>
        )
    }

    return(
        <View className="size-full justify-center items-center rounded-full mt-4 bg-yel-100 p-5 overflow-hidden">
            <Image source={iconSrc} tintColor="#00000" className="size-5"/>
        </View>
    )
}

const _layout = () => {
  return (
    <Tabs
        screenOptions={{
            tabBarShowLabel: false,
            tabBarItemStyle: {
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            },
            tabBarStyle: {
                backgroundColor: "#434343",
                height: 105,
                paddingTop: 10,
                position: "absolute",
                overflow: "hidden",
                borderColor: "#434343",
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50
            },
            tabBarButton: (props) => (
                <PlatformPressable
                    {...props}
                    android_ripple={{ color: 'transparent' }}  // Disables the ripple effect for Android
                />
            ),
        }}
    >
        <Tabs.Screen 
            name='index'
            options={{
                headerShown: false,
                tabBarIcon: ({focused})=>(
                    <>
                        <TabIcon 
                            tabName="Dashboard"
                            iconSrc={icons.dashboardicon}
                            focused={focused}
                        />
                    </>
                )
            }}
        />
        <Tabs.Screen 
            name='chat'
            options={{
                headerShown: false,
                tabBarIcon: ({focused})=>(
                    <>
                        <TabIcon 
                            tabName="Chat"
                            iconSrc={icons.chaticon}
                            focused={focused}
                        />
                    </>
                )
            }}
        />
        <Tabs.Screen 
            name='call'
            options={{
                headerShown: false,
                tabBarIcon: ({focused})=>(
                    <>
                        <TabIcon 
                            tabName="Call"
                            iconSrc={icons.callicon}
                            focused={focused}
                        />
                    </>
                )
            }}
        />
        <Tabs.Screen 
            name='settings'
            options={{
                headerShown: false,
                tabBarIcon: ({focused})=>(
                    <>
                        <TabIcon 
                            tabName="Settings"
                            iconSrc={icons.settingsicon}
                            focused={focused}
                        />
                    </>
                )
            }}
        />
        <Tabs.Screen 
            name='profile'
            options={{
                headerShown: false,
                tabBarIcon: ({focused})=>(
                    <>
                        <TabIcon 
                            tabName="Profile"
                            iconSrc={icons.profileicon}
                            focused={focused}
                        />
                    </>
                )
            }}
        />
    </Tabs>
  )
}

export default _layout